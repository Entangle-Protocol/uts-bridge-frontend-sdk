'use client'
import type { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import React, { useMemo } from 'react'
import cx from 'classnames'
import { EBridgeInteractionType } from '../../bridgeTypes'
import styles from './AmountBlock.module.scss'
import { trimZerosFromEnd } from '@/utils/trimZerosFromEnd'
import { useGetCommission } from '@/core/Bridge/hooks'
import { TokenBridgeProtocol, trimmedDecimals } from '@/constants/tokens'
import { useGetPrice } from '@/hooks/useGetPrice'
import { toFixedDown } from '@/utils/toFixedDown'
import { renderFunds } from '@/utils/renderFunds'

export interface IAmountBlock {
  className?: string
  type: EBridgeInteractionType
  setAmount?: (v?: string) => void
  amount?: string
  price?: number
  error?: boolean
  balance?: string
  setError?: Dispatch<SetStateAction<boolean>>
  chainId?: number
  withBalance?: boolean
  token?: string
  tokenTicker?: string
  decimals?: number
  balanceMinusOne?: boolean
  subtractionDisabled?: boolean
  noMax?: boolean
  protocol?: TokenBridgeProtocol
}

export const isValidPartialFloat = (value: string) => {
  if (!value) {
    return true
  }

  // @ts-ignore
  return !isNaN(value)
}

export const AmountBlock: FC<IAmountBlock> = ({
  className,
  type,
  setAmount,
  error,
  balance,
  setError,
  amount,
  withBalance = true,
  token,
  tokenTicker,
  balanceMinusOne,
  decimals = 18,
  subtractionDisabled,
  noMax,
  protocol,
}) => {
  const isFrom = type === EBridgeInteractionType.From
  const usdRate = useGetPrice(token, !isFrom)

  const { willReceive, willReceiveDisplay, blocked } = useGetCommission(
    Number(amount),
    undefined,
    protocol === TokenBridgeProtocol.UTS
  )

  const handleAmountChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value
    if (!isValidPartialFloat(val)) {
      return
    }
    const digitsAfterDot = val.split('.')[1]?.length
    if (digitsAfterDot && digitsAfterDot > decimals) {
      return
    }
    const value = val.replace(/[^0-9.]/g, '')
    if (setAmount) {
      setAmount(value)
    }
    if (setError) {
      setError(false)
    }
  }

  const handleMaxClick = () => {
    const currentBalance =
      token === 'NGL' && balanceMinusOne ? (+balance! - 1).toString() : balance

    if (setAmount) {
      setAmount(+balance! ? currentBalance : '')
    }
  }

  const resultDecimals = trimmedDecimals[token || ''] || decimals
  const renderBalance = useMemo(() => {
    const balanceValue = renderFunds(
      toFixedDown(Number(balance), resultDecimals),
      resultDecimals
    )
    return `Bal: ${balanceValue} ${tokenTicker || ''}`
  }, [balance, resultDecimals, tokenTicker])

  const showInitialAmount = subtractionDisabled || isFrom

  const inputValue = showInitialAmount ? amount : willReceiveDisplay.toString()
  const inputValueDisplay = showInitialAmount
    ? inputValue
    : !inputValue || Number(inputValue) < 0
      ? ''
      : trimZerosFromEnd(toFixedDown(+inputValue, resultDecimals), 2)

  const hasUsdRate = usdRate && amount && willReceive > 0
  const usdPrice = hasUsdRate
    ? toFixedDown(Number(usdRate) * (showInitialAmount ? +amount : +willReceive), 2)
    : '0.00'

  return (
    <div
      className={cx(
        styles.amount,
        { [styles.amount_error]: error, [styles.bottom]: !isFrom },
        className
      )}
    >
      <div className={styles.amount__box}>
        <input
          type='text'
          value={inputValueDisplay}
          onChange={isFrom ? handleAmountChange : () => {}}
          className={cx(styles.amount__input, {
            [styles.amount__input_disabled]: !isFrom,
            [styles.fade]: blocked,
          })}
          disabled={!isFrom}
          placeholder='0.00'
        />
        <span
          className={cx(styles.amount__text, !hasUsdRate && styles.invisible)}
        >{`($${usdPrice})`}</span>
      </div>
      <div className={styles.amount__box}>
        {!noMax && (
          <button className={styles.amount__max} onClick={handleMaxClick}>
            Max
          </button>
        )}
        {withBalance && <span className={styles.amount__text}>{renderBalance}</span>}
      </div>
    </div>
  )
}
