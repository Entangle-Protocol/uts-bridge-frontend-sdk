import type { MouseEventHandler } from 'react'
import { memo, useCallback, useState } from 'react'
import cn from 'classnames'

import styles from './Spoiler.module.scss'
import { ArrowDown } from '@/public/assets/icons/arrow-down-tx'
import { TxInfo } from './TxHashInfo'

export interface SpoilerProps {
  txs: {
    id: number
    label: string
    chainId: string
    txHash: string
    link: string
  }[]
}

const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
  e.stopPropagation()
}

export const Spoiler = memo(({ txs }: SpoilerProps) => {
  const [isShowSpoiler, setIsShowSpoiler] = useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.stopPropagation()
    setIsShowSpoiler((prev) => !prev)
  }, [])
  return (
    <div
      onClick={stopPropagation}
      className={cn(styles.root, { [styles.root_open]: isShowSpoiler })}
    >
      <div className={styles.header}>
        <TxInfo
          key={txs[0].id}
          label={txs[0].label}
          chainId={txs[0].chainId}
          txHash={txs[0].txHash}
          link={txs[0].link}
          className={styles.item}
        />
        {txs.length > 1 && (
          <button
            className={cn(styles.button, {
              [styles.button_open]: isShowSpoiler,
            })}
            onClick={handleClick}
          >
            <ArrowDown
              className={cn(styles.button__icon, {
                [styles.button__icon_open]: isShowSpoiler,
              })}
            />
          </button>
        )}
      </div>
      {isShowSpoiler && (
        <div className={styles.content}>
          {txs.slice(1).map((item) => (
            <TxInfo
              key={item.id}
              label={item.label}
              chainId={item.chainId}
              txHash={item.txHash}
              link={item.link}
              className={styles.item}
            />
          ))}
        </div>
      )}
    </div>
  )
})

Spoiler.displayName = 'Spoiler'
