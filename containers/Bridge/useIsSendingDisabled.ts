import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'

export const useIsSendingDisabled = (amount?: string) => {
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  return (
    !amount ||
    isNaN(Number(amount)) ||
    !Number(amount) ||
    !tokens.from ||
    !tokens.to ||
    !chains.from ||
    !chains.to
  )
}
