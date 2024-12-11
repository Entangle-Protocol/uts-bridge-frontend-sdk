import type { TOperation } from '@/containers/Bridge/BridgeSidebar/BridgeOperations'
import type { BridgeOperationParams } from '@/core/Bridge/BridgeEntity/BridgeEntity'
import { formatUnits } from 'viem'
import type { TokenOption } from '@/constants/tokens'
import { getTokenByNameAndChainId, TokenBridgeProtocol } from '@/constants/tokens'
import { chainsRealIdsToInternal } from '@/constants/networkConfigs'

const protocolsMapping: Record<string, TokenBridgeProtocol> = {
  entangle: TokenBridgeProtocol.CCM,
  cctp: TokenBridgeProtocol.CCTP,
  UTS: TokenBridgeProtocol.UTS,
}

export const getClientDataFromServerData = (
  serverData: TOperation,
  allTokenOptions: Record<string, TokenOption[]>,
  decimals?: number
): BridgeOperationParams => {
  const tokenFrom = getTokenByNameAndChainId(
    +serverData.src_chain_id || serverData.src_chain_id,
    serverData.token,
    allTokenOptions
  )
  const tokenTo = getTokenByNameAndChainId(
    +serverData.dst_chain_id || serverData.dst_chain_id,
    serverData.token,
    allTokenOptions
  )
  const amount = (() => {
    if (!serverData?.amount) {
      return 0
    }

    return formatUnits(BigInt(serverData.amount), tokenFrom?.decimals || decimals || 18) || 0
  })()

  return {
    txHash: serverData.src_tx_hash as `0x${string}` | null,
    dstTxHash: serverData.dst_tx_hash as `0x${string}` | null,
    sourceChainId:
      chainsRealIdsToInternal[+serverData.src_chain_id] ||
      (+serverData.src_chain_id ? +serverData.src_chain_id : serverData.src_chain_id),
    destChainId:
      chainsRealIdsToInternal[+serverData.dst_chain_id] ||
      (+serverData.dst_chain_id ? +serverData.dst_chain_id : serverData.dst_chain_id),
    tokenFrom: tokenFrom?.systemLabel || null,
    tokenTo: tokenTo?.systemLabel || null,
    timestamp: new Date(serverData.created_at).getTime(),
    arrivedAt: serverData.arrived_at ? new Date(serverData.arrived_at).getTime() : null,
    sent: String(amount),
    willReceive: 0,
    protocol: protocolsMapping[serverData.bridge_protocol] || TokenBridgeProtocol.CCM,
    metadata: serverData.metadata,
    status: serverData.status as string,
    recipient: serverData.recipient,
    sender: serverData.sender,
  }
}
