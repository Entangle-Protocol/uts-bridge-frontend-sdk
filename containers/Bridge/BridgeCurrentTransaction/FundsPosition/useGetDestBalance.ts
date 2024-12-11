import { formatUnits } from 'viem'
import { useGetPrice } from '@/hooks/useGetPrice'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import { useAppDispatch } from '@/core/store'
import useBridgeWallet from '@/hooks/useBridgeWallet'
import { useEffect } from 'react'
import { BridgeInteractor } from '@/core/Bridge/BridgeInteractor'
import { toFixedDown } from '@/utils/toFixedDown'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { GLOBAL_POLLING_INTERVAL } from '@/constants/common'

let i: NodeJS.Timeout

export const useGetDestBalance = () => {
  const dispatch = useAppDispatch()
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const { allTokensObj, allTokensByChainId } = useAllTokens()
  const currentOperationClientData = useSelector(
    (state: IState) => state.BridgeEntity.currentOperationClientData
  )
  const balances = useSelector((state: IState) => state.BridgeEntity.balances)

  const destinationAddress = useSelector(
    (state: IState) => state.BridgeEntity.destinationAddress
  )
  const { addressFrom } = useBridgeWallet()

  const balanceAddress =
    currentOperationClientData?.metadata?.additional_account ||
    currentOperationClientData?.recipient ||
    destinationAddress ||
    addressFrom ||
    ''
  const balanceChain = currentOperationClientData?.destChainId || chains?.to
  const tokenTo = allTokensObj[(currentOperationClientData?.tokenTo as string) || tokens.to]
  const usdRate = useGetPrice(tokenTo?.tokenValue)

  useEffect(() => {
    clearInterval(i)

    const fetchBalances = () => {
      if (balanceAddress) {
        i = setInterval(() => {
          dispatch(
            BridgeInteractor.getBalances({
              address: balanceAddress,
              chainId: +balanceChain,
              tokens: allTokensByChainId[balanceChain],
            })
          )
        }, GLOBAL_POLLING_INTERVAL)
      }
    }
    fetchBalances()
    return () => {
      clearInterval(i)
    }
  }, [allTokensByChainId, balanceAddress, balanceChain, dispatch])

  const balanceToBigInt = balances[balanceAddress]?.[tokenTo?.systemLabel || ''] || 0n
  const balanceTo = Number(formatUnits(balanceToBigInt, tokenTo?.decimals || 18)) || 0
  const balanceToUSD = balanceTo * (usdRate || 0)
  const balanceToDisplay = Number(toFixedDown(Number(balanceTo), 2))
  const balanceToUSDDisplay = Number(toFixedDown(balanceToUSD, 2))

  return {
    balanceToDisplay,
    balanceToUSDDisplay,
  }
}
