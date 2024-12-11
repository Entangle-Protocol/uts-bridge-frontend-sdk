import { useEffect, useState } from 'react'
import { EBridgeStatus } from '@/containers/Bridge/bridgeTypes'
import { isPhantomMobile } from '@/helpers/isPhantomMobile'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import { useAppDispatch } from '@/core/store'
import useAccount from '@/hooks/useAccount'
import { usePrevious } from '@/hooks/usePrevious'

export const useBridgeStatus = (amount: number, setAmount: (val: string) => void) => {
  const { address } = useAccount()
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const bridgeLoading = useSelector((state: IState) => state.BridgeEntity.bridgeLoading)
  const prevBridgeLoading = usePrevious(bridgeLoading)
  const [status, setStatus] = useState<EBridgeStatus>(EBridgeStatus.NotConnectedWallet)
  const dispatch = useAppDispatch()

  const prevChainFrom = usePrevious(chains.from) as number
  const prevChainTo = usePrevious(chains.to) as number
  useEffect(() => {
    if ((!address && !isPhantomMobile) || isPhantomMobile) {
      return setStatus(EBridgeStatus.NotConnectedWallet)
    }
    if (status === EBridgeStatus.NotConnectedWallet) {
      setStatus(EBridgeStatus.ConnectedWallet)
    }
    if (chains.to && tokens.to && chains.from && tokens.from && !!Number(amount)) {
      return setStatus(EBridgeStatus.TargetReady)
    }
    if (chains.from && tokens.from && status !== EBridgeStatus.BridgeSuccess) {
      return setStatus(EBridgeStatus.SourceReady)
    }
  }, [address, amount, status, chains.to, chains.from, tokens.to, tokens.from])

  useEffect(() => {
    if (bridgeLoading === 'pending') {
      setStatus(EBridgeStatus.BridgePending)
    }
    if (prevBridgeLoading === 'pending' && bridgeLoading === 'signed') {
      setStatus(EBridgeStatus.BridgePending)
    }
    if (prevBridgeLoading === 'signed' && bridgeLoading === 'fulfilled') {
      setStatus(EBridgeStatus.BridgeSuccess)
      setAmount('')
    }
    if (bridgeLoading === 'rejected') {
      setStatus(EBridgeStatus.BridgeFailed)
    }
  }, [bridgeLoading, prevBridgeLoading, setAmount])

  // Reset status address if network changed
  useEffect(() => {
    if (
      status === EBridgeStatus.BridgeSuccess &&
      (chains.from !== prevChainFrom || chains.to !== prevChainTo)
    ) {
      setStatus(EBridgeStatus.SourceReady)
    }
  }, [chains.from, chains.to, dispatch, prevChainFrom, prevChainTo, status])

  return status
}
