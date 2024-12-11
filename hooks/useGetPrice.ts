import { useEffect } from 'react'
import { TokenCoinGeckoIds } from '@/constants/tokens'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import { useAppDispatch, useStore } from '@/core/store'

export const useGetPrice = (token: string | undefined, skip?: boolean) => {
  const dispatch = useAppDispatch()
  const {
    asyncActions: {
      Coin: { getPrice },
    },
  } = useStore((store) => ({
    Bridge: store.BridgeEntity,
    CoinEntity: store.CoinEntity,
  }))

  useEffect(() => {
    if (token && !skip) {
      dispatch(getPrice(TokenCoinGeckoIds[token]))
    }
  }, [dispatch, getPrice, token, skip])

  const res = useSelector((s: IState) => {
    return s.CoinEntity.coins[TokenCoinGeckoIds[token || ''] || '']?.price
  })

  if (token === 'usdc') {
    return 1
  }

  return res
}
