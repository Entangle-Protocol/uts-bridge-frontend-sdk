import { memo, useEffect, useMemo, useState } from 'react'
import styles from './BridgeOperations.module.scss'
import { OperationCard } from './OperationCard'
import { type Address, erc20Abi } from 'viem'
import { type TokenOption } from '@/constants/tokens'
import { OperationCardSkeletons } from '@/containers/Bridge/BridgeSidebar/BridgeOperations/OperationCard/OperationCardSkeleton'
import { useAccount } from 'wagmi'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import type { ETxStatus } from '@/containers/Bridge/bridgeTypes'
import { getPublicClient } from '@/core/Bridge/BridgeRepository'

export interface BridgeOperationsProps {
  operations?: TOperation[]
  switchTab?: () => void
}

export type TOperation = {
  id: string
  src_tx_hash: string
  dst_chain_id: string
  amount: string
  created_at: string
  arrived_at: string
  updated_at: string
  bridge_protocol: string
  dst_tx_hash: string | null
  metadata: {
    //cctp
    claimed?: boolean
    claimable?: boolean
    claimed_at?: string
    attestation?: string
    claimable_at?: string
    message_hash?: string
    attestation_status?: string
    message_bytes?: string
    additional_account?: string
    //entangle
    operation_one_hash?: string
    operation_two_hash?: string
    step?: string
    src_underlying_token?: Address
    src_contract_address?: Address
  }
  status: ETxStatus
  token: string
  src_chain_id: string
  sender: string
  recipient: string
}

export const BridgeOperations = memo(({ operations, switchTab }: BridgeOperationsProps) => {
  const { allTokensArr } = useAllTokens()
  const { address } = useAccount()
  const [isLoading, seIsLoading] = useState(true)
  useEffect(() => {
    if (operations?.length) {
      seIsLoading(false)
    }
  }, [operations])

  function filterMismatchedOperations(
    operations: TOperation[] | undefined,
    allTokensArr: TokenOption[]
  ): TOperation[] | undefined {
    if (!operations) {
      return undefined
    }

    const seenAddresses = new Set<string>()

    return operations.filter((operation) => {
      const srcContractAddress = operation.metadata?.src_underlying_token

      if (!srcContractAddress) {
        return false
      }

      if (seenAddresses.has(srcContractAddress)) {
        return false
      }

      seenAddresses.add(srcContractAddress)

      return !allTokensArr.some(
        (tokenOption) =>
          tokenOption.contractAddress.toLowerCase() === srcContractAddress.toLowerCase()
      )
    })
  }

  const mismatchedOperations = useMemo(() => {
    return filterMismatchedOperations(operations, allTokensArr)
  }, [operations])

  useEffect(() => {
    const fetchTokens = async () => {
      if (!mismatchedOperations) {
        return
      }

      const fetchedTokensPromises = mismatchedOperations.map(async (operation) => {
        const contracts = [
          {
            abi: erc20Abi,
            address: operation.metadata.src_underlying_token as Address,
            functionName: 'decimals',
          },
          {
            abi: erc20Abi,
            address: operation.metadata.src_underlying_token as Address,
            functionName: 'symbol',
          },
          {
            abi: erc20Abi,
            address: operation.metadata.src_underlying_token as Address,
            functionName: 'name',
          },
        ]

        const publicClient = getPublicClient(Number(operation.src_chain_id))
        const responses = await publicClient.multicall({ contracts })

        const [decimals, symbol, name] = responses.map((item) => item?.result || null)

        return {
          decimals: decimals as number | null,
          symbol: symbol as string | null,
          name: name as string | null,
          chainId: operation.src_chain_id,
          underlyingToken: operation.metadata.src_underlying_token,
          contractAddress: operation.metadata.src_contract_address,
        }
      })
    }

    fetchTokens()
  }, [mismatchedOperations])

  return (
    <div className={styles.root}>
      <div className={styles.operations}>
        <div className={styles.operations__wrapper}>
          {isLoading && operations !== undefined && <OperationCardSkeletons />}
          {!!operations?.length &&
            !isLoading &&
            operations?.map((item: TOperation) => {
              return <OperationCard item={item} switchTab={switchTab} key={item.id} />
            })}
          {!Boolean(operations?.length) && address && (
            <span className={styles.operations__empty}>Currently no transactions yet</span>
          )}
          {!Boolean(operations?.length) && !address && (
            <span className={styles.operations__empty}>
              Connect your wallet to see the transactions
            </span>
          )}
        </div>
      </div>
    </div>
  )
})

BridgeOperations.displayName = 'BridgeOperations'
