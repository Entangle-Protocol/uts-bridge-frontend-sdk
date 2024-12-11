import type { StaticImageData } from 'next/image'
import type { TokenOption } from '@/constants/tokens'

enum EBridgeInteractionType {
  From = 'from',
  To = 'to',
}

export enum EBridgeStatus {
  NotConnectedWallet,
  ConnectedWallet,
  SourceReady,
  TargetReady,
  BridgePending,
  BridgeSuccess,
  BridgeFailed,
}

export enum ETxStatus {
  ON_GOING = 'pending',
  CLAIMABLE = 'claimable',
  CLAIMED = 'claimed',
  COMPLETE = 'complete',
  FAILED = 'failed',
}

export const TxStatusName = {
  [ETxStatus.ON_GOING]: 'On-Going',
  [ETxStatus.CLAIMABLE]: 'Claimable',
  [ETxStatus.CLAIMED]: 'Claimed',
  [ETxStatus.COMPLETE]: 'Completed',
  [ETxStatus.FAILED]: 'Failed',
}

export interface IBridgeDirection {
  from: IBridgeParticipantNetwork
  to: IBridgeParticipantNetwork
}

export interface IBridgeToken {
  from: TokenOption
  to: TokenOption
}

export type IBridgeParticipantNetwork = {
  networkText: string
  networkIcon: StaticImageData | null
  networkValue: string
  isEntangle?: boolean
  chainId: number
  disabled?: boolean
}

interface IBridgeBalance {
  estimatedTime?: string
  points?: string
  amount?: string
  token: string
}

enum NOTIFICATION_MESSAGES {
  SuccessWalletVerified = 'Wallet verified',
  ErrorEvmWalletNotVerified = 'Incorrect EVM address. Kindly input correct address to proceed',
  ErrorAmountInput = 'The minimum amount for bridging is 100 NGL / WNGL',
}

export { EBridgeInteractionType, NOTIFICATION_MESSAGES }
export type { IBridgeBalance }
