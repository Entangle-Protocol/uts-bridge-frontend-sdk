import { useEffect, useMemo } from 'react'
import { isMobile } from '@/helpers/isMobile'
import { useAccount, useSwitchChain } from 'wagmi'
import { type IState } from '@/core/store'
import { useSelector } from 'react-redux'

const useBridgeWallet = () => {
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const { switchChain } = useSwitchChain()
  const { address: evmAddress } = useAccount()

  const chainId = chains.from || 0

  const addressFrom = useMemo(() => {
    return evmAddress
  }, [chainId, evmAddress])

  const currentOperationClientData = useSelector(
    (state: IState) => state.BridgeEntity.currentOperationClientData
  )

  useEffect(() => {
    if (isMobile()) {
      return
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOperationClientData])

  useEffect(() => {
    if (!evmAddress || !chainId || currentOperationClientData) {
      return
    }
    switchChain({ chainId })
  }, [chainId, currentOperationClientData, evmAddress, switchChain])

  return {
    addressFrom,
    chainId,
    isConnected: !!evmAddress,
  }
}

export default useBridgeWallet
