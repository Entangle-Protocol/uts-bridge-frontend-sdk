import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { getChainByChainId } from '@/constants/networkConfigs'
import { TokenBridgeProtocol } from '@/constants/tokens'
import type { TOperation } from '@/containers/Bridge/BridgeSidebar/BridgeOperations'
import { ETxStatus } from '@/containers/Bridge/bridgeTypes'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import type { IState } from '@/core/store'
import { useAppDispatch } from '@/core/store'
import useBridgeWallet from '@/hooks/useBridgeWallet'
import { useAddNotification } from '@/providers/NotificationContext'
import { parseUnits } from 'ethers'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useWalletClient } from 'wagmi'
import { useApproveTransferUTS } from './useApproveTransferUTS'
import { useGetCommission } from '@/core/Bridge/hooks'

interface IUseApproveTransferProps {
  destinationAddress: string | undefined
  addressIsInvalid: boolean | undefined
  amount: string | undefined
}

const useApproveTransfer = ({
  destinationAddress,
  addressIsInvalid,
  amount,
}: IUseApproveTransferProps) => {
  const dispatch = useAppDispatch()
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const { allTokensObj } = useAllTokens()
  const { addressFrom } = useBridgeWallet()
  const { data: signer } = useWalletClient()
  const tokenFrom = allTokensObj[tokens.from]
  const tokenTo = allTokensObj[tokens.to]
  const { willReceive } = useGetCommission(
    Number(amount),
    undefined,
    tokenFrom?.protocol === TokenBridgeProtocol.UTS
  )
  const approveTransferUTS = useApproveTransferUTS()
  const addNotification = useAddNotification()

  const handleApproveTransfer = useCallback(async () => {
    let txHash

    const to = destinationAddress || addressFrom

    const chainTo = getChainByChainId(chains.to)
    const chainIdToHex = chainTo?.chainIdHex

    if (addressIsInvalid || !to || !chainIdToHex || !tokenFrom || !tokenTo || !amount) {
      return
    }

    const protocol = tokenFrom.protocol
    const uts = protocol === TokenBridgeProtocol.UTS

    const commonProps = {
      to,
      isUnwrap: false,
      chainIdTo: chains.to,
      chainIdFrom: chains.from,
      chainIdToHex,
      amount: amount!,
      contractAddress: tokenFrom.contractAddress,
      tokenFrom: tokenFrom?.tokenValue,
    }

    try {
      dispatch(BridgeEntity.actions.setLoading('pending'))
      if (uts && signer && addressFrom) {
        txHash = await approveTransferUTS({
          ...commonProps,
          from: addressFrom,
          client: signer,
          amount: parseUnits(amount, tokenFrom.decimals),
          connectorAddress: tokenFrom.metadata?.connectorAddress,
        })
      }

      dispatch(BridgeEntity.actions.setLoading('fulfilled'))

      const hash =
        typeof txHash === 'string'
          ? txHash
          : // @ts-ignore
            txHash?.hash ||
            // @ts-ignore
            txHash?.payload?.hash ||
            // @ts-ignore
            txHash?.payload?.transactionHash ||
            // @ts-ignore
            txHash?.payload

      if (hash) {
        try {
          const allLsOperations = localStorage.getItem('all_bridge_operations')
          const allOperations = allLsOperations ? JSON.parse(allLsOperations) : {}
          allOperations[addressFrom!] = allOperations[addressFrom!] || []
          const newOperation: TOperation = {
            id: '',
            src_tx_hash: hash,
            dst_chain_id: String(chains.to),
            amount: String(BigInt(Number(amount) * 10 ** tokenFrom.decimals)),
            created_at: new Date().toISOString(),
            arrived_at: '',
            updated_at: '',
            bridge_protocol: String('entangle'),
            dst_tx_hash: null,
            metadata: {
              claimed: false,
              claimable: false,
              claimed_at: '',
              attestation: '',
              claimable_at: '',
              message_hash: '',
              attestation_status: '',
              message_bytes: '',
            },
            status: ETxStatus.ON_GOING,
            token: tokenFrom.tokenValue,
            src_chain_id: String(chains.from),
            sender: addressFrom!,
            recipient: to,
          }
          allOperations[addressFrom!].unshift(newOperation)
          dispatch(
            BridgeEntity.actions.addBridgeOperations({
              address: addressFrom!,
              operations: [newOperation],
            })
          )
          localStorage.setItem('all_bridge_operations', JSON.stringify(allOperations))
        } catch (error) {
          console.error(error)
        }

        dispatch(
          BridgeEntity.actions.setCurrentOperationClientData({
            txHash: hash,
            sourceChainId: chains.from,
            destChainId: chains.to,
            tokenFrom: tokenFrom.systemLabel,
            tokenTo: tokenTo.systemLabel,
            timestamp: new Date().getTime(),
            sent: amount,
            willReceive,
            protocol: tokenFrom.protocol,
            status: 'pending',
            sender: addressFrom!,
            recipient: destinationAddress || addressFrom!,
            dstTxHash: null,
          })
        )
      }
    } catch (error) {
      dispatch(BridgeEntity.actions.setLoading('rejected'))
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'Failed to send transaction',
      })
      console.error(error)
    }
  }, [
    chains.to,
    chains.from,
    addressIsInvalid,
    tokenFrom,
    tokenTo,
    amount,
    destinationAddress,
    addressFrom,
    dispatch,
    signer,
    approveTransferUTS,
    willReceive,
    addNotification,
  ])

  return handleApproveTransfer
}

export { useApproveTransfer }
