'use client'
import type { FC } from 'react'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'
import styles from './Selector.module.scss'
import { SelectNetworkModal } from '@/containers/Bridge/Modal/SelectNetwork'
import type { IBridgeParticipantNetwork } from '../../bridgeTypes'
import { networkOptions } from '@/constants/networkConfigs'

interface INetworkSelector {
  className?: string
  value: number
  onClick: (option: IBridgeParticipantNetwork) => void
  disabled?: boolean
  type?: string
  inverseTokenValue?: string
}

export const NetworkSelector: FC<INetworkSelector> = ({
  className,
  value,
  onClick,
  disabled,
  type,
  inverseTokenValue,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onOpen = () => {
    setIsModalOpen(true)
  }

  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  const selected = useMemo(() => networkOptions.find((o) => o.chainId === value), [value])

  return (
    <>
      <button onClick={onOpen} className={cx(styles.selector, className)} disabled={disabled}>
        <div className={cx(styles.selector__box, styles.selector__box_big)}>
          {!selected ? (
            <div className={cx(styles.selector__icon, styles.selector__icon_empty)}></div>
          ) : (
            <Image
              className={styles.selector__icon}
              width={36}
              height={36}
              src={selected.networkIcon!}
              alt={selected.networkText}
            />
          )}
        </div>
        <span
          className={cx(styles.selector__name, {
            [styles.selector__name_active]: selected,
          })}
        >
          {!selected ? 'Network' : selected.networkText}
        </span>
      </button>
      <SelectNetworkModal
        onClose={onCloseModal}
        enable={isModalOpen}
        selectedValue={selected?.networkValue || ''}
        onClick={onClick}
        type={type}
        inverseTokenValue={inverseTokenValue}
      />
    </>
  )
}
