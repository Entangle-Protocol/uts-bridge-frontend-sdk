import type { TransactionStatusResponse } from '../BridgeEntity'
import type { ContractFunctionParameters, WalletClient } from 'viem'

export type txHash = `0x${string}`

export interface IBridgeRepository {
  getTokenBalance(
    contractAddress: string,
    signer: WalletClient,
    chainId: number
  ): Promise<bigint>

  getTokenBalanceMulticallData(
    contractAddress: string,
    address: string
  ): ContractFunctionParameters

  getTransactionStatus(args: {
    txHash: txHash
    destChainId: string | number
    sourceChainId: string | number
  }): Promise<TransactionStatusResponse | undefined>
}
