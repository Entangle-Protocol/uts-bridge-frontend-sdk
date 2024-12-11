import { trimZerosFromEnd } from '@/utils/trimZerosFromEnd'
import { toFixedDown } from '@/utils/toFixedDown'

export const renderFunds = (balance: string | undefined, resultDecimals: number) => {
  let balanceValue
  if (!balance || Number.isNaN(balance)) {
    balanceValue = '0.00'
  } else if (Number(balance) > 100_000) {
    balanceValue = Number(balance).toLocaleString('en', { notation: 'compact' })
  } else {
    balanceValue = trimZerosFromEnd(toFixedDown(Number(balance), resultDecimals), 2)
  }
  return balanceValue
}
