// X_only:
// while usually X step means X is ready and Y is loading, X_only means X is done and Y is not loading yet
// X_only step always goes before X step

import { TokenBridgeProtocol } from '@/constants/tokens'

const statusTextsCCM: Record<string, string> = {
  // client
  '0_0': 'Choose the asset and amount to bridge',
  '0_1': 'Ready to bridge your funds',
  '0_2': 'Sending funds from source chain',
  // server
  '1_only': 'Funds sent from source chain',
  '1': 'Inbound Msg in flight from source chain.',
  '2': 'Executing Inbound Msg on Entangle...',
  '3_only': 'Inbound Msg delivered on Entangle.',
  '3': 'Outbound Msg in flight to destination.',
  '4': 'Executing Outbound Msg on destination.',
  '5': 'Funds received on destination chain.',
}

const statusTextsCCTP: Record<string, string> = {
  // client
  '0_0': 'Choose the asset and amount to bridge.',
  '0_1': 'Ready to approve and send your funds.',
  '0_2': 'Approve the USDC amount in your wallet.',
  '0_3': 'Ready to bridge your funds',
  '1': 'Confirm to send USDC in your wallet.',
  '2': 'Sending USDC from source chain...',
  '3_only': 'USDC sent from source chain.',
  '3': 'Receiving USDC on destination chain...',
  // server
  '4_only': 'USDC received on destination chain.',
  '4': 'Ready to claim your USDC.',
  '5': 'USDC claimed to your wallet.',
}

const emptyHash = '0x0000000000000000000000000000000000000000'

const statusesMap = {
  [TokenBridgeProtocol.CCM]: statusTextsCCM,
  [TokenBridgeProtocol.UTS]: statusTextsCCM,
  [TokenBridgeProtocol.CCTP]: statusTextsCCTP,
}

const DELAY_BETWEEN_STEP_AND_ONLY = 5000
const DELAY_BETWEEN_STEPS = 1500

export { DELAY_BETWEEN_STEP_AND_ONLY, DELAY_BETWEEN_STEPS, emptyHash, statusesMap }
