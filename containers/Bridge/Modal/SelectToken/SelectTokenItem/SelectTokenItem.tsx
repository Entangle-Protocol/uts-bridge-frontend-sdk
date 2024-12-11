import { type FC, useCallback, useMemo } from 'react'
import Image from 'next/image'
import cx from 'classnames'

import css from './SelectTokenItem.module.scss'
import { EBridgeInteractionType } from '@/containers/Bridge/bridgeTypes'
import { useWalletClient } from 'wagmi'
import { useSelector } from 'react-redux'
import type { IStore } from '@/core/store'
import { formatUnits } from 'viem'
import { useGetWalletByChain } from '@/hooks/useGetWalletByChain'
import { type TokenOption, trimmedDecimals } from '@/constants/tokens'
import { PlusIcon } from '@/public/assets/icons/PlusIcon'
import { useAllTokens } from '@/ui/hooks/useAllTokens'
import { JazzIcon } from '@/ui/components/JazzIcon/JazzIcon'
import { truncateText } from '@/helpers/truncateText'
import { renderFunds } from '@/utils/renderFunds'

interface ISelectTokenItem {
  className?: string
  option: TokenOption
  selectedValue: string
  onClose: () => void
  onClick: (option: string) => void
  inverseValue?: string
  chainId?: number
  type: EBridgeInteractionType
  balance?: string
}

const images: Record<string, string> = {
  WNGL: '/public/chains/rsz_entangle.png',
  NGL: '/public/chains/rsz_entangle.png',
  GORPLES: '/public/assets/icons/gorples.png',
  GORPLE: '/public/assets/icons/gorples.png',
}

export const SelectTokenItem: FC<ISelectTokenItem> = ({
  option,
  selectedValue,
  className,
  onClose,
  onClick,
  chainId,
  type,
  inverseValue,
}) => {
  const isSelected = selectedValue === option.tokenValue
  const { data: wallet } = useWalletClient()
  const currentAddress = useGetWalletByChain(chainId)
  const { allTokensObj } = useAllTokens()
  const balances = useSelector((state: IStore) => {
    return state.BridgeEntity.balances[currentAddress || '']
  })
  const balance = formatUnits(balances?.[option.systemLabel] || 0n, option.decimals).toString()

  const onHandleClick = () => {
    onClose()
    onClick(option.systemLabel)
  }

  const showAddButton = true

  const resultDecimals = trimmedDecimals[option.tokenValue] || 3

  const renderBalance = useMemo(() => {
    if (!balance) {
      return '0.00'
    }
    const balanceValue = renderFunds(balance, resultDecimals)
    return `${balanceValue} ${option.tokenValue}`
  }, [balance, option.tokenValue, resultDecimals])
  const inverseTokenValue = allTokensObj[inverseValue || '']?.tokenValue
  const doesntMatchDepartureToken =
    type === EBridgeInteractionType.To &&
    inverseTokenValue &&
    inverseTokenValue !== option.tokenValue

  const isDisabled = type === EBridgeInteractionType.From && option.tokenValue === 'NGL'

  const handleAdd = useCallback(
    async (event: { stopPropagation: () => void }) => {
      try {
        event.stopPropagation()
        if (!wallet) {
          return
        }

        await wallet.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: option.contractAddress,
              symbol: option.tokenValue,
              decimals: option.decimals,
              image: `${window.location.origin}${images[option.tokenValue as string]}`,
            },
          },
        })
      } catch (error) {
        console.error('error watchAsset', error)
      }
    },
    [option.decimals, option.contractAddress, option.tokenValue, wallet]
  )

  if (doesntMatchDepartureToken) {
    return null
  }

  return (
    <button
      className={cx(
        css.item,
        {
          [css.item_selected]: isSelected,
        },
        className
      )}
      onClick={isDisabled ? () => {} : onHandleClick}
      disabled={isDisabled}
    >
      <div className={css.wrap}>
        <div className={css.item__container}>
          <div className={css.item__image}>
            {option.tokenIcon?.src ? (
              <Image
                className={css.item__icon}
                sizes='32px'
                src={option.tokenIcon.src || ''}
                width={option.tokenIcon?.width || 32}
                height={option.tokenIcon?.height || 32}
                alt={option.tokenValue}
              />
            ) : (
              <JazzIcon
                address={option.contractAddress}
                diameter={option.tokenIcon?.width || 32}
              />
            )}
          </div>
          <div className={cx(css.item__box, css.item__box_start)}>
            <span className={css.item__name}>{option.tokenText}</span>
            <span className={css.item__value}>
              {truncateText(option.tokenValue, 8)}{' '}
              {!option.verified && (
                <Image src='/icons/warning.svg' alt='warning' width={18} height={18} />
              )}
            </span>
          </div>
        </div>
        {type === EBridgeInteractionType.From && (
          <>
            <div className={cx(css.item__box, css.item__box_end)}>
              <span
                className={cx(css.itemBalanceContainer, {
                  [css.showAddButton]: showAddButton,
                })}
              >
                <span className={css.item__name}>Balance</span>
                <span className={cx(css.item__value, css.item__value_balance)}>
                  {renderBalance}
                </span>
              </span>
              {showAddButton && (
                <span className={css.addTokenIconContainer} onClick={handleAdd}>
                  <PlusIcon className={css.addTokenIcon} />
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </button>
  )
}
