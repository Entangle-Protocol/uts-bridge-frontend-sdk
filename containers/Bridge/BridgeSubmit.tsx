import css from '@/containers/Bridge/page.module.scss'
import SubmitButton from '@/containers/Bridge/SubmitButton'
import { memo, useEffect, useState } from 'react'
import type { IState } from '@/core/store'
import { useGetCommission } from '@/core/Bridge/hooks'
import { useSelector } from 'react-redux'
import { useAccount } from 'wagmi'
import { useIsSendingDisabled } from '@/containers/Bridge/useIsSendingDisabled'

import { useApproveTransfer } from '@/blockchain/hooks/useApproveTransfer'
import { TokenBridgeProtocol } from '@/constants/tokens'
import { useIsInvalidToAddress } from '@/app/bridge/useIsInvalidToAddress'

interface IBridgeSubmitProps {
  amount?: string
  error: boolean
  addressError: boolean
  chainId: number
  destinationAddress?: string
  currentTokenBalanceFormatted?: string
  protocol?: TokenBridgeProtocol
}

const BridgeSubmit = ({
  amount,
  error,
  destinationAddress,
  currentTokenBalanceFormatted,
  protocol,
}: IBridgeSubmitProps) => {
  const { address } = useAccount()
  const bridgeLoading = useSelector((state: IState) => state.BridgeEntity.bridgeLoading)
  const isLoading = bridgeLoading === 'pending' || error

  const { executionFee } = useGetCommission(
    Number(amount),
    undefined,
    protocol === TokenBridgeProtocol.UTS
  )
  const [blockedByCommissionAnimation, setBlockedByCommissionAnimation] = useState(false)

  useEffect(() => {
    setBlockedByCommissionAnimation(true)
    setTimeout(() => {
      setBlockedByCommissionAnimation(false)
    }, 1000)
  }, [executionFee])

  const disabled = useIsSendingDisabled(amount)
  const addressIsInvalid = useIsInvalidToAddress()

  const isDisabled =
    addressIsInvalid || disabled || error || isLoading || blockedByCommissionAnimation

  const isEnterDestAddress = false

  const handleApproveTransfer = useApproveTransfer({
    amount,
    destinationAddress,
    addressIsInvalid,
  })

  return (
    <SubmitButton
      className={css.form__submit}
      onSubmit={handleApproveTransfer}
      disabled={isDisabled}
      isInvalid={addressIsInvalid}
      isEnterDestAddress={isEnterDestAddress}
      balance={currentTokenBalanceFormatted || ''}
      amount={amount}
      address={address}
    />
  )
}

export default memo(BridgeSubmit)
