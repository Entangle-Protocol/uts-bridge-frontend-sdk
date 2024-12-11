import { useDispatch } from 'react-redux'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import type { Address, WalletClient } from 'viem'
import { getContract } from 'viem'
import { UTSBaseAbi } from '../EVM/abi/UTSBase'
import { useCallback } from 'react'

export interface IApproveTransferPayloadUTS {
  from: string
  to: string
  chainIdTo: number
  amount: bigint
  contractAddress: string
  client: WalletClient
  connectorAddress?: string
}

export const useApproveTransferUTS = () => {
  const dispatch = useDispatch()
  const approveTransferUTS = useCallback(
    async ({
      from,
      to,
      amount,
      chainIdTo,
      contractAddress,
      client,
      connectorAddress,
    }: IApproveTransferPayloadUTS) => {
      try {
        if (!client?.account || !client?.chain) {
          throw new Error('ERROR14 signer is undefined')
        }
        // UTS Bridge contract address
        const address = (connectorAddress || contractAddress) as Address
        const currentChain = client.chain
        const targetChainId = BigInt(chainIdTo)
        const utsBaseContract = getContract({
          address,
          abi: UTSBaseAbi,
          client,
        })
        const [_, gasLimit] = await utsBaseContract.read.estimateBridgeFee([
          targetChainId,
          BigInt(0),
          0,
          '0x',
        ])
        const [paymentAmount] = await utsBaseContract.read.estimateBridgeFee([
          targetChainId,
          gasLimit,
          0,
          '0x',
        ])
        const estimateGas = await utsBaseContract.estimateGas.bridge(
          [from as Address, to as Address, amount, targetChainId, gasLimit, '0x', '0x'],
          {
            value: paymentAmount,
            account: client.account,
          }
        )

        const result = await utsBaseContract.write.bridge(
          [from as Address, to as Address, amount, targetChainId, gasLimit, '0x', '0x'],
          {
            value: paymentAmount,
            chain: currentChain,
            account: client.account,
            gas: estimateGas,
          }
        )
        dispatch(BridgeEntity.actions.setLoading('signed'))
        return result
      } catch (err) {
        console.error(err, 'ERROR144 UTS')
        throw new Error('Error while approving transfer')
      }
    },
    [dispatch]
  )
  return approveTransferUTS
}
