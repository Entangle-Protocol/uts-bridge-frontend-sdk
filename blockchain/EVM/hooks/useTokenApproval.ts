import { useCallback, useState } from 'react'
import { useWalletClient } from 'wagmi'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import { type Address, erc20Abi, getContract } from 'viem'
import { waitForTransactionReceipt } from '@wagmi/core'
import { wagmiConfig } from '@/blockchain/EVM/provider'

/**
 * Returns a approve method that can be used to approve allowance
 * @param tokenAddress the given token contract address
 * @param spenderAddress the spender's address that the allowance is granted on
 * @param useExact boolean to approve exact amount or infinite amount
 */
const useTokenApproval = (tokenAddress: string, spenderAddress: string) => {
  const { data: wallet } = useWalletClient()
  const [isLoading, setIsLoading] = useState(false)
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)

  const approve = useCallback(
    async (amountToApprove: bigint) => {
      setIsLoading(true)

      try {
        if (!wallet) {
          return
        }

        const tokenContract = getContract({
          address: tokenAddress as Address,
          abi: erc20Abi,
          client: wallet,
        })
        const estimateGas = await tokenContract.estimateGas.approve([
          spenderAddress as `0x${string}`,
          amountToApprove,
        ])

        const hash = await tokenContract.write.approve(
          [spenderAddress as `0x${string}`, amountToApprove],
          { gas: estimateGas }
        )

        const res = await waitForTransactionReceipt(
          // @ts-ignore
          wagmiConfig,
          {
            hash,
            chainId: chains.from,
            confirmations: 2,
          }
        )
        return res
      } catch (error) {
        console.log('error', error)
      } finally {
        setIsLoading(false)
      }
    },
    [chains.from, spenderAddress, tokenAddress, wallet]
  )

  return {
    approve,
    isLoading,
  }
}

export default useTokenApproval
