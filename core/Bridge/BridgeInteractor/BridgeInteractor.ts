import { createAsyncThunk } from '@reduxjs/toolkit'
import type { IBridgeRepository, txHash } from '../BridgeRepository'
import { BridgeRepository, getPublicClient } from '../BridgeRepository'
import type { Thunk } from '../../types/interactor'
import type { TransactionStatusResponse } from '../BridgeEntity'
import type { TokenOption } from '@/constants/tokens'
import { nonEVMChainIds } from '@/constants/networkConfigs'

export interface IBridgeBalancesArgs {
  tokens: TokenOption[]
  address: string
  chainId: number
}

export interface IBridgeInteractor {
  getBalances: Thunk<
    IBridgeBalancesArgs,
    { address: string; balances: Record<string, bigint> }
  >
  getTransactionStatus: Thunk<
    {
      txHash: txHash
      destChainId: string | number
      sourceChainId: string | number
    },
    TransactionStatusResponse | undefined
  >
}

export const createBridgeInteractor = (Repository: IBridgeRepository): IBridgeInteractor => ({
  getBalances: createAsyncThunk(
    'BridgeInteractor/getBalances',
    async ({ chainId, address, tokens }) => {
      const balances: Record<string, bigint> = {}
      // funcs for nonEVM chains
      const getBalanceByChainId = Repository.getTokenBalanceMulticallData
      const formattedTokens = tokens.filter((token) => {
        // some balances we request directly from wallet - like NGL in NGL chain
        if (!token.chainId || !token.contractAddress) {
          return false
        }

        return !nonEVMChainIds.includes(token.chainId as number)
      })
      if (!formattedTokens.length) {
        return { address, balances }
      }

      const contracts = formattedTokens.map((token) =>
        BridgeRepository.getTokenBalanceMulticallData(token.contractAddress, address)
      )

      const publicClient = getPublicClient(chainId)
      const responses = await publicClient.multicall({ contracts })

      formattedTokens.forEach((token, i) => {
        const { result, status } = responses[i]

        if (status !== 'success') {
          return
        }

        balances[token.systemLabel] = result as bigint
      })

      return { address, balances }
    }
  ),
  getTransactionStatus: createAsyncThunk(
    'BridgeInteractor/getTransactionStatus',
    async (params) => {
      // @ts-ignore
      const response = await Repository.getTransactionStatus(params)
      return response
    }
  ),
})

export const BridgeInteractor = createBridgeInteractor(BridgeRepository)
