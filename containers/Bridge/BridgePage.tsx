'use client'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { formatUnits } from 'viem'
import { useSwitchChain } from 'wagmi'
import { InteractionBlock } from '@/containers/Bridge/InteractionBlock/InteractionBlock'
import { EBridgeInteractionType, NOTIFICATION_MESSAGES } from '@/containers/Bridge/bridgeTypes'
import { SwitchTransfer } from '@/containers/Bridge/SwitchTransfer/SwitchTransfer'
import css from '@/containers/Bridge/page.module.scss'
import { type IState, useAppDispatch, useStore } from '@/core/store'
import { notifyError } from '@/containers/Bridge/Notification'
import { TokenBridgeProtocol } from '@/constants/tokens'
import { useGetWalletByChain } from '@/hooks/useGetWalletByChain'
import BridgeSubmit from '@/containers/Bridge/BridgeSubmit'
import { useSelector } from 'react-redux'
import { useBridgeStatus } from '@/containers/Bridge/useBridgeStatus'
import { BridgeSidebar } from '@/containers/Bridge/BridgeSidebar'
import { BridgeFees } from '@/containers/Bridge/BridgeFees'
import useBridgeWallet from '@/hooks/useBridgeWallet'
import useBridgeBalance from '@/blockchain/EVM/hooks/useBridgeBalance'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ReceiptIcon } from '@/public/assets/icons/receipt'
import { useReturnBack } from '@/providers/ReturnBackContext/ReturnBackContext'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { GLOBAL_POLLING_INTERVAL } from '@/constants/common'

function BridgePage() {
  const dispatch = useAppDispatch()
  const { allTokensObj, allTokensByChainId } = useAllTokens()
  const {
    store: {
      Bridge: { balances },
      CoinEntity: {
        coins: {
          entangle: { price },
        },
      },
    },
    actions: {
      Bridge: { setTokens, setChains },
    },
  } = useStore((store) => ({
    Bridge: store.BridgeEntity,
    CoinEntity: store.CoinEntity,
  }))
  const isMobile = useMediaQuery(1060)

  const destinationAddress = useSelector(
    (state: IState) => state.BridgeEntity.destinationAddress
  )

  const [amount, setAmount] = useState<undefined | string>('')
  const [addressError, setAddressError] = useState(false)
  const [error, setError] = useState(false)
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const tokens = useSelector((state: IState) => state.BridgeEntity.tokens)

  const status = useBridgeStatus(Number(amount), setAmount)
  const { addressFrom, chainId } = useBridgeWallet()
  useBridgeBalance(addressFrom, chains.from, allTokensByChainId, destinationAddress)

  const { goToState, content: returnBackContent } = useReturnBack()

  const onHandleReset = useCallback(() => {
    dispatch(BridgeEntity.actions.dropCurrentOperation())
    setAmount('')
    setError(false)
  }, [dispatch])

  const handleSwitch = useCallback(() => {
    onHandleReset()

    dispatch(
      setTokens({
        from: tokens.to,
        to: tokens.from,
      })
    )
    dispatch(
      setChains({
        from: chains.to,
        to: chains.from,
      })
    )
  }, [
    allTokensObj,
    chains.from,
    chains.to,
    dispatch,
    onHandleReset,
    setChains,
    setTokens,
    tokens.from,
    tokens.to,
  ])

  const tokenFrom = allTokensObj[tokens.from]
  const tokenTo = allTokensObj[tokens.to]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!chains.to || !tokens.from) {
        return
      }

      // dispatch(
      //   getMinBridgeAmounts({
      //     chainId: chains.to,
      //     tokenName: tokenFrom?.tokenValue,
      //   })
      // )
    }, GLOBAL_POLLING_INTERVAL)
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chains.to, tokens.from])

  const { switchChain } = useSwitchChain()

  useEffect(() => {
    if (!addressFrom || !chains.from) {
      return
    }
    switchChain({ chainId: chains.from })
  }, [addressFrom, switchChain, chains.from])

  useEffect(() => {
    if (error) {
      return notifyError(NOTIFICATION_MESSAGES.ErrorAmountInput)
    }

    if (addressError) {
      return notifyError(NOTIFICATION_MESSAGES.ErrorEvmWalletNotVerified)
    }
  }, [error, addressError, chains.to])

  const currentAddress = useGetWalletByChain(chainId)
  const currentTokenBalance = balances?.[currentAddress || '']?.[tokens.from] || 0n
  const currentTokenBalanceFormatted = currentAddress
    ? formatUnits(currentTokenBalance, allTokensObj[tokens.from]?.decimals)
    : '0'

  const currentTokenBalanceTo = useMemo(() => {
    return (
      (!!chains.to &&
        !!tokens.to &&
        balances?.[destinationAddress || currentAddress || '']?.[tokens.to]) ||
      0n
    )
  }, [balances, chains.to, currentAddress, destinationAddress, tokens.to])

  const currentTokenBalanceToFormatted = useMemo(() => {
    return formatUnits(currentTokenBalanceTo, allTokensObj[tokens.to]?.decimals)
  }, [allTokensObj, chains.to, currentTokenBalanceTo, tokens.to])

  return (
    <div className={css.bridgePageLayout}>
      <div>
        <div className={css.contentContainer}>
          {(returnBackContent !== 'Bridge' || !isMobile) && (
            <header className={css.contentContainerHeader}>
              <button className={css.showStatus} onClick={() => goToState('Bridge')}>
                <ReceiptIcon className={css.showStatus__icon} />
                <span className={css.showStatus__text}>View Status</span>
              </button>
            </header>
          )}
          <div className={css.bridgePage}>
            {(returnBackContent !== 'Bridge' || !isMobile) && (
              <div className={css.form}>
                <InteractionBlock
                  className={css.form__from}
                  type={EBridgeInteractionType.From}
                  inverseType={EBridgeInteractionType.To}
                  onSwitch={handleSwitch}
                  chainId={chainId}
                  address={addressFrom}
                  setAmount={setAmount}
                  AmountProps={{
                    error,
                    setError,
                    price,
                    amount,
                    balance: currentTokenBalanceFormatted,
                    setAmount,
                    token: tokenFrom?.tokenText,
                    tokenTicker: tokenFrom?.tokenValue,
                  }}
                />
                <SwitchTransfer className={css.form__switch} onSwitch={handleSwitch} />
                <InteractionBlock
                  className={css.form__to}
                  type={EBridgeInteractionType.To}
                  inverseType={EBridgeInteractionType.From}
                  onSwitch={handleSwitch}
                  chainId={chains.to}
                  setAmount={setAmount}
                  AmountProps={{
                    price,
                    subtractionDisabled: tokenFrom?.protocol === TokenBridgeProtocol.CCTP,
                    amount: !!(chains.to || tokens.to) ? amount : undefined,
                    setAmount,
                    token: tokenTo?.tokenText,
                    tokenTicker: tokenFrom?.tokenValue,
                    balance: currentTokenBalanceToFormatted,
                    noMax: true,
                  }}
                  DestinationProps={{
                    setAddressError,
                  }}
                />
                <BridgeFees className={css.feesDesc} amount={amount} />
                <BridgeSubmit
                  amount={amount}
                  destinationAddress={destinationAddress}
                  chainId={chainId}
                  currentTokenBalanceFormatted={currentTokenBalanceFormatted}
                  error={error}
                  addressError={addressError}
                  protocol={tokenFrom?.protocol}
                />
              </div>
            )}
            {((isMobile && returnBackContent === 'Bridge') || !isMobile) && (
              <div className={css.status}>
                <BridgeSidebar status={status} amount={amount} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BridgePage
