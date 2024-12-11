import type { FC } from 'react'
import css from './SelectNetworkItem.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import type { IBridgeParticipantNetwork } from '@/containers/Bridge/bridgeTypes'

interface ISelectNetworkItem {
  className?: string
  option: IBridgeParticipantNetwork
  selected: boolean
  onClose: () => void
  onClick: (option: IBridgeParticipantNetwork) => void
  disabled?: boolean
}

export const SelectNetworkItem: FC<ISelectNetworkItem> = ({
  option,
  selected,
  className,
  onClose,
  onClick,
  disabled,
}) => {
  const onHandleClick = () => {
    onClose()
    onClick(option)
  }

  return (
    <button
      className={cn(
        css.item,
        {
          [css.item_selected]: selected,
          [css.disabled]: disabled,
        },
        className
      )}
      onClick={disabled ? () => {} : onHandleClick}
    >
      <div className={css.item__box}>
        <Image
          className={css.item__icon}
          width={40}
          height={40}
          src={option.networkIcon!}
          alt={option.networkText}
        />
      </div>
      <span className={css.item__name}>{option.networkText}</span>
    </button>
  )
}
