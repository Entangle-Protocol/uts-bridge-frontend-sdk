import type { FC } from 'react'
import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'
import styles from './Selector.module.scss'
import { SelectTokenModal } from '@/containers/Bridge/Modal/SelectToken'
import type { EBridgeInteractionType } from '../../bridgeTypes'
import type { TokenOption } from '@/constants/tokens'
import { JazzIcon } from '@/ui/components/JazzIcon/JazzIcon'

interface ITokenSelector {
  className?: string
  options: TokenOption[]
  value: string
  inverseValue: string
  onClick: (option: string) => void
  disabled: boolean
  chainId?: number
  type: EBridgeInteractionType
}

export const TokenSelector: FC<ITokenSelector> = ({
  className,
  options,
  value,
  inverseValue,
  onClick,
  disabled,
  chainId,
  type,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onOpen = () => {
    setIsModalOpen(true)
  }

  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  const selected = useMemo(
    () => options?.find((o) => o.systemLabel === value),
    [options, value]
  )

  return (
    <>
      <button
        onClick={onOpen}
        className={cx(styles.selector, styles.selector_small, className)}
        disabled={disabled}
      >
        <div className={cx(styles.selector__box, styles.selector__box_small)}>
          {!selected ? (
            <div className={cx(styles.selector__icon, styles.selector__icon_empty)}></div>
          ) : selected?.tokenIcon ? (
            <Image
              className={styles.selector__icon}
              width={24}
              height={24}
              src={selected.tokenIcon}
              alt={selected.tokenValue}
            />
          ) : (
            <JazzIcon address={selected.contractAddress} diameter={24} />
          )}
        </div>
        <span
          className={cx(styles.selector__name, {
            [styles.selector__name_active]: selected,
          })}
        >
          {!selected ? 'Asset' : selected.tokenValue}
        </span>
      </button>
      {isModalOpen && (
        <SelectTokenModal
          onClose={onCloseModal}
          enable={isModalOpen}
          selectedValue={selected?.tokenValue || ''}
          inverseValue={inverseValue}
          options={options}
          onClick={onClick}
          chainId={chainId}
          type={type}
        />
      )}
    </>
  )
}
