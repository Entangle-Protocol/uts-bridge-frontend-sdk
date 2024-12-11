import React, { type FC, memo, useCallback, useMemo } from 'react'
import cx from 'classnames'
import { type IState, useAppDispatch } from '@/core/store'
import useAccount from '@/hooks/useAccount'
import styles from './SubmitButton.module.scss'
import { isPhantomMobile } from '@/helpers/isPhantomMobile'
import { TokenBridgeProtocol } from '@/constants/tokens'
import useTokenApproval from '@/blockchain/EVM/hooks/useTokenApproval'
import { useSelector } from 'react-redux'
import { AppEntity } from '@/core/App/AppEntity'
import { Refresh } from '@/public/assets/icons/Refresh'
import { useBlockedByAllowance } from '@/containers/Bridge/useBlockedByAllowance'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import { getChainByChainId, networkConfigs } from '@/constants/networkConfigs'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { parseUnits } from 'viem'

interface ISubmitButton {
  className?: string
  onSubmit: () => void
  disabled: boolean
  amount?: string
  balance: string
  address?: string
  allowance?: string
  isInvalid?: boolean
  isEnterDestAddress?: boolean
}

const { setApproveRequestOpen } = BridgeEntity.actions

const SubmitButton: FC<ISubmitButton> = ({
  className,
  onSubmit,
  disabled,
  amount,
  balance,
  isInvalid,
  isEnterDestAddress,
}) => {
  const { address } = useAccount()
  const dispatch = useAppDispatch()
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const { allTokensObj } = useAllTokens()
  const tokenFrom = allTokensObj[tokens.from]
  const tokenTo = allTokensObj[tokens.to]
  const bridgeLoading = useSelector((state: IState) => state.BridgeEntity.bridgeLoading)
  const isBlockedByAllowance = useSelector(
    (state: IState) => state.BridgeEntity.isBlockedByAllowance
  )
  const fromNetwork = getChainByChainId(chains.from)
  const unauthorized = useMemo(() => {
    if (!fromNetwork?.nonEvm && !address) {
      return true
    }
    return false
  }, [address, fromNetwork?.nonEvm])

  const goToMetamask =
    isPhantomMobile && !!chains.from && chains.from !== networkConfigs.Ethereum.chainId

  const { approve, isLoading: isApproveLoading } = useTokenApproval(
    tokenFrom?.contractAddress,
    tokenFrom?.metadata?.tokenMessenger || tokenFrom?.metadata?.connectorAddress || ''
  )

  const onConnectWallet = () => {
    dispatch(AppEntity.actions.setWalletConnectChainId(networkConfigs.Ethereum.chainId))
  }

  const chooseGoLink = () => {
    if (goToMetamask) {
      return window.open(
        `https://metamask.app.link/dapp/${window.location.host}/bridge`,
        '_blank'
      )
    }
  }

  const notEnoughBalance = amount && +amount > +balance
  const { refetchAllowance } = useBlockedByAllowance(amount)

  const isDisabled = disabled || notEnoughBalance || isInvalid

  const buttonText = useMemo(() => {
    if (isEnterDestAddress) {
      return 'Enter Destination Address'
    }
    if (isInvalid) {
      return 'Invalid Address'
    }
    if (isApproveLoading) {
      return (
        <>
          <Refresh className={styles.refresh} />
          Approving {tokenFrom?.tokenValue} Amount in Wallet...
        </>
      )
    }
    if (notEnoughBalance) {
      return 'Insufficient Funds'
    }
    if (!amount) {
      return 'Bridge'
    }
    if (bridgeLoading === 'pending') {
      return 'Confirming to send funds in wallet...'
    }
    if (tokenFrom?.protocol === TokenBridgeProtocol.CCTP && isBlockedByAllowance) {
      return 'Approve USDC amount'
    }
    if (tokenFrom?.protocol === TokenBridgeProtocol.UTS && isBlockedByAllowance) {
      return `Approve ${tokenFrom.tokenValue} amount`
    }
    return 'Bridge'
  }, [
    isEnterDestAddress,
    isInvalid,
    isApproveLoading,
    notEnoughBalance,
    amount,
    bridgeLoading,
    tokenFrom?.protocol,
    tokenFrom?.tokenValue,
    isBlockedByAllowance,
  ])

  const handleClick = useCallback(async () => {
    if (
      (tokenFrom?.protocol === TokenBridgeProtocol.CCTP ||
        tokenFrom?.protocol === TokenBridgeProtocol.UTS) &&
      isBlockedByAllowance
    ) {
      dispatch(setApproveRequestOpen(true))
      try {
        await approve(parseUnits(amount || '0', tokenFrom.decimals))
        await refetchAllowance()
        dispatch(setApproveRequestOpen(false))
        onSubmit()
      } catch (e) {
        dispatch(setApproveRequestOpen(false))
        console.error(e)
      }
    } else {
      onSubmit()
    }
  }, [
    amount,
    approve,
    dispatch,
    isBlockedByAllowance,
    onSubmit,
    refetchAllowance,
    tokenFrom?.decimals,
    tokenFrom?.protocol,
  ])

  if (unauthorized) {
    return (
      <button className={cx(styles.submit, className)} onClick={onConnectWallet}>
        Connect Wallet
      </button>
    )
  }

  if (goToMetamask) {
    return (
      <button className={cx(styles.submit, className)} onClick={chooseGoLink}>
        Choose Compatible Wallet
      </button>
    )
  }

  return (
    <button
      className={cx(styles.submit, className)}
      onClick={handleClick}
      disabled={!!isDisabled}
    >
      {buttonText}
    </button>
  )
}

export default memo(SubmitButton)
