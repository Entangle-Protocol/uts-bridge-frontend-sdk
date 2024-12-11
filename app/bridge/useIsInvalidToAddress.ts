import { isAddress as isValidAddress } from 'viem'
import type { IState } from '@/core/store'
import { useSelector } from 'react-redux'
import useBridgeWallet from '@/hooks/useBridgeWallet'

export const useIsInvalidToAddress = () => {
  let errors

  const { addressFrom } = useBridgeWallet()
  const destinationAddress = useSelector(
    (state: IState) => state.BridgeEntity.destinationAddress
  )
  const to = destinationAddress || addressFrom

  if (!to) {
    return false
  }

  if (!isValidAddress(to!)) {
    errors = true
  }

  return errors
}
