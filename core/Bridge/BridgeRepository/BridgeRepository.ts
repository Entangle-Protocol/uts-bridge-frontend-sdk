import type { IBridgeRepository } from './BridgeRepository.interfaces'
import {
  type Address,
  type ContractFunctionParameters,
  createPublicClient,
  erc20Abi,
  getContract,
} from 'viem'
import { apolloClientCcmIndexer } from '@/core/apollo'
import { GET_TRANSACTION_STATUS } from '@/core/Bridge/BridgeRepository/BridgeRepository.constants'
import type { TransactionStatusResponse } from '@/core/Bridge/BridgeEntity'
import { transports, wagmiConfig } from '@/blockchain/EVM/provider'

export const getPublicClient = (chainId: number) => {
  const chain = wagmiConfig.chains.find((c) => c.id === chainId)
  return createPublicClient({
    chain,
    transport: transports[chainId],
  })
}

export const BridgeRepository: IBridgeRepository = {
  getTokenBalance: async (contractAddress, client, chainId) => {
    try {
      const address = client?.account?.address

      const publicClient = getPublicClient(chainId)

      if (!address) {
        throw new Error('Error while getting token balance: no address')
      }
      const tokenContract = getContract({
        address: contractAddress as Address,
        abi: erc20Abi,
        client: publicClient,
      })

      return await tokenContract.read.balanceOf([address])
    } catch (err) {
      console.error(err, contractAddress)
      return 0n
    }
  },
  getTokenBalanceMulticallData: (contractAddress, address) => {
    if (!address) {
      throw new Error('Error while getting token balance: no address (multicall)')
    }
    const tokenContract = {
      address: contractAddress as Address,
      abi: erc20Abi,
    }

    return {
      ...tokenContract,
      functionName: 'balanceOf',
      args: [address],
    } as ContractFunctionParameters
  },

  getTransactionStatus: async ({ txHash, destChainId, sourceChainId }) => {
    try {
      const data = await apolloClientCcmIndexer.query({
        query: GET_TRANSACTION_STATUS,
        variables: {
          txHash,
          sourceChainId: Number(sourceChainId),
          destChainId: Number(destChainId),
        },
      })
      return data?.data?.bridge as unknown as TransactionStatusResponse
    } catch (err) {
      console.error(err)
      return undefined
    }
  },
}
