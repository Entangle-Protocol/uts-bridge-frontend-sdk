import { useSelector } from 'react-redux'
import type { IStore } from '@/core/store'
import { useEffect, useMemo, useState } from 'react'
import { useGetPrice } from '@/hooks/useGetPrice'

export interface ICommission {
  feePercent: number
  executionFee: string
  feeTotal: number
  feeAbsolute: number
}

export const useGetCommission = (
  amount: number | undefined,
  tokenName?: string,
  isUTS?: boolean
) => {
  const [executionFeePercent, setExecutionFeePercent] = useState<number | undefined>(undefined)
  const [blocked, setBlocked] = useState(false)
  const {
    value: { networkFee: nf, executionFeePercent: efp },
  } = useSelector((state: IStore) => state.BridgeEntity.commission)
  const usdRate = useGetPrice(tokenName)

  const networkFee = isUTS ? 0 : nf
  // need this intermediate state for button blocking
  const executionFee = isUTS
    ? 0
    : executionFeePercent
      ? Number(amount || 0) * executionFeePercent
      : 0
  const feeTotal: number = useMemo(() => {
    return Number(networkFee) + Number(executionFee)
  }, [networkFee, executionFee])

  useEffect(() => {
    if (!efp) {
      return setExecutionFeePercent(efp)
    }
    setBlocked(true)
    setTimeout(() => {
      setBlocked(false)
      setExecutionFeePercent(efp)
    }, 500)
    // should update only when executionFee changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [efp])

  const willReceive = useMemo(
    () => (!feeTotal ? Number(amount) : Number(amount) - feeTotal),
    [amount, feeTotal]
  )
  const willReceiveDisplay = !!willReceive ? willReceive : 0

  return {
    networkFee,
    networkFeeFormatted: Number(networkFee).toLocaleString('en', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    executionFeePercent,
    executionFee,
    executionFeeUSD: Number(executionFee) * (usdRate || 0),
    feeTotal,
    feeTotalUSD: feeTotal * (usdRate || 0),
    willReceiveDisplay,
    blocked,
    willReceive,
  }
}
