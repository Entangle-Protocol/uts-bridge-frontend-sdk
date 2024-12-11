import { TokenBridgeProtocol } from '@/constants/tokens'

export const fundsTextsCCM: Record<string, string> = {
  // client
  '0': '',
  '0_1': 'You’ll receive',
  '0_2': "You'll send",
  '1_only': 'You sent',
  '1': 'Receiving...',
  '2': 'Receiving...',
  '3_only': 'Receiving...',
  '3': 'Receiving...',
  '4': 'Receiving...',
  '5': 'Received',
}

export const fundsTextsCCTP: Record<string, string> = {
  // client
  '0': '',
  '0_1': "You'll send",
  '0_2': "You'll send",
  '0_3': "You'll send",
  '1': "You'll send",
  '2': "You're sening",
  '3_only': 'USDC sent from source chain.',
  '3': 'You sent',
  // server
  '4_only': 'Claimable USDC',
  '4': 'Claimable USDC',
  '5': 'Claimed USDC',
}

export const fundsTexts = {
  [TokenBridgeProtocol.CCM]: fundsTextsCCM,
  [TokenBridgeProtocol.UTS]: fundsTextsCCM,
  [TokenBridgeProtocol.CCTP]: fundsTextsCCTP,
}
