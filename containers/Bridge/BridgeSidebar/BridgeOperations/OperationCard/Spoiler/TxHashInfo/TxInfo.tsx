import { memo, useState, useMemo, useCallback, type MouseEventHandler } from 'react'
import cn from 'classnames'
import Image from 'next/image'

import styles from './TxInfo.module.scss'
import { getChainByChainId } from '@/constants/networkConfigs'
import { IconExternal } from '@/public/assets/icons/external'
import { CopyIcon } from '@/public/assets/icons/copy'

export interface TxInfoProps {
  label: string
  chainId: string
  txHash: string
  link: string
  className?: string
}

const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
  e.stopPropagation()
}

export const TxInfo = memo(({ label, chainId, txHash, link, className }: TxInfoProps) => {
  const [isCopied, setIsCopied] = useState(false)
  const chainInfo = getChainByChainId(chainId)

  const txHashLC = txHash.toLocaleLowerCase()

  const handleCopyClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation()
      navigator.clipboard.writeText(txHashLC)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    },
    [txHashLC]
  )

  const hashLabel = useMemo(() => {
    if (isCopied) {
      return `${String(txHashLC).slice(0, 2)}...${String(txHashLC).slice(-4)}`
    }

    return `${String(txHashLC).slice(0, 4)}....${String(txHashLC).slice(-4)}`
  }, [isCopied, txHashLC])

  return (
    <div className={cn(styles.root, className)}>
      <span className={styles.label}>{label}</span>
      <div className={styles.content}>
        <button
          className={cn(styles.copy, { [styles.copy_active]: isCopied })}
          onClick={handleCopyClick}
        >
          <Image
            className={styles.copy__chain}
            alt={`${chainInfo?.name} Icon`}
            src={chainInfo?.icon || ''}
            width={16}
            height={16}
          />
          <span className={cn(styles.copy__hash, { [styles.copy__hash_active]: isCopied })}>
            {hashLabel}
          </span>
          {isCopied ? (
            <span className={styles.copy__text}>copied</span>
          ) : (
            <CopyIcon className={styles.copy__icon} />
          )}
        </button>
        <a
          onClick={stopPropagation}
          className={styles.link}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <IconExternal className={styles.link__icon} />
        </a>
      </div>
    </div>
  )
})

TxInfo.displayName = 'TxInfo'
