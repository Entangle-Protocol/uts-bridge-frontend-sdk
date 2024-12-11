import { useMemo } from 'react'
import { TokenBridgeProtocol } from '@/constants/tokens'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import { useIsSendingDisabled } from '@/containers/Bridge/useIsSendingDisabled'
import { useAllTokens } from '@/ui/hooks/useAllTokens'

export const useCurrentStep = (amount?: string) => {
  const { allTokensObj } = useAllTokens()
  const currentOperationClientData = useSelector(
    (state: IState) => state.BridgeEntity.currentOperationClientData
  )
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const bridgeLoading = useSelector((state: IState) => state.BridgeEntity.bridgeLoading)
  const isBlockedByAllowance = useSelector(
    (state: IState) => state.BridgeEntity.isBlockedByAllowance
  )
  const approveRequestOpen = useSelector(
    (state: IState) => state.BridgeEntity.approveRequestOpen
  )
  const tokenFrom = allTokensObj[tokens.from]
  const disabled = useIsSendingDisabled(amount)
  const isUTSConnector = tokenFrom?.metadata?.connectorAddress
  const protocol = currentOperationClientData?.protocol || tokenFrom?.protocol

  return useMemo(() => {
    // block of data from server
    if (!!currentOperationClientData?.metadata?.step) {
      return String(currentOperationClientData?.metadata?.step)
    }
    // cctp
    if (currentOperationClientData?.metadata?.claimed) {
      return '5'
    }
    // cctp
    if (currentOperationClientData?.metadata?.claimable) {
      return '4'
    }

    // block of data that is set on client
    if (
      protocol === TokenBridgeProtocol.CCM ||
      (protocol === TokenBridgeProtocol.UTS && !isUTSConnector)
    ) {
      if (currentOperationClientData?.txHash) {
        return '1'
      }
      if (disabled) {
        return '0_0'
      }
      if (['pending', 'fulfilled', 'signed'].includes(bridgeLoading)) {
        return '0_2'
      }
      return '0_1'
    }
    if (
      protocol === TokenBridgeProtocol.CCTP ||
      (protocol === TokenBridgeProtocol.UTS && isUTSConnector)
    ) {
      if (bridgeLoading === 'fulfilled' || currentOperationClientData?.txHash) {
        return '3'
      }
      if (bridgeLoading === 'signed') {
        return '2'
      }
      if (bridgeLoading === 'pending') {
        return '1'
      }
      if (approveRequestOpen) {
        return '0_2'
      }
      if (disabled) {
        return '0_0'
      }
      if (isBlockedByAllowance) {
        return '0_1'
      }
      return '0_3'
    }
    return '0_0'
  }, [
    currentOperationClientData,
    protocol,
    isUTSConnector,
    disabled,
    bridgeLoading,
    approveRequestOpen,
    isBlockedByAllowance,
  ])
}
