import useTokenAllowance from '@/blockchain/EVM/hooks/useTokenAllowance'
import { TokenBridgeProtocol } from '@/constants/tokens'
import { useSelector } from 'react-redux'
import { type IState, useAppDispatch } from '@/core/store'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { useEffect } from 'react'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'

export const useBlockedByAllowance = (amount?: string) => {
  const { allTokensObj } = useAllTokens()
  const dispatch = useAppDispatch()
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const tokenFrom = allTokensObj[tokens.from]
  const isBlockedByAllowance = useSelector(
    (state: IState) => state.BridgeEntity.isBlockedByAllowance
  )
  const UTSConnector = tokenFrom?.metadata?.connectorAddress
  const skip =
    !tokenFrom?.contractAddress ||
    !(tokenFrom.metadata?.tokenMessenger || UTSConnector) ||
    (tokenFrom?.protocol !== TokenBridgeProtocol.CCTP &&
      tokenFrom?.protocol !== TokenBridgeProtocol.UTS)

  const { allowance, refetch } = useTokenAllowance(
    {
      contractAddress: tokenFrom?.contractAddress,
      tokenMessenger: tokenFrom?.metadata?.tokenMessenger || UTSConnector || '',
    },
    {
      skip,
    }
  )

  useEffect(() => {
    const setBlock = (isBlocked: boolean) => {
      dispatch(BridgeEntity.actions.setAllowanceBlock(isBlocked))
    }
    if (!UTSConnector && tokenFrom?.protocol === TokenBridgeProtocol.UTS) {
      return setBlock(false)
    }

    const isBlocked =
      !allowance || Number(amount) > Number(allowance) / 10 ** tokenFrom?.decimals

    setBlock(isBlocked)
  }, [UTSConnector, allowance, amount, dispatch, tokenFrom?.decimals, tokenFrom?.protocol])

  return {
    isBlockedByAllowance,
    refetchAllowance: refetch,
  }
}
