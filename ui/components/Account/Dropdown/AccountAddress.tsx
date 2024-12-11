import type { FC } from 'react'
import React, { memo, useCallback, useEffect } from 'react'
import styles from '@/ui/components/Account/Account.module.css'
import { CopyIcon } from '@/public/assets/icons/copy'
import { truncateAddress } from '@/helpers/truncateAddress'

interface AccountAddressProps {
  address?: string
  isCopied: boolean
  setIsCopied: (isCopied: boolean) => void
}

export const AccountAddress: FC<AccountAddressProps> = memo(
  ({ address, isCopied, setIsCopied }) => {
    const handleCopy = useCallback(() => {
      if (address) {
        navigator.clipboard.writeText(address)
        setIsCopied(true)
      }
    }, [address, setIsCopied])

    const handleMouseLeave = useCallback(() => {
      setIsCopied(false)
    }, [setIsCopied])

    useEffect(() => {
      return () => {
        setIsCopied(false)
      }
    }, [setIsCopied])

    return (
      <>
        <span
          className={styles.copyLabel}
          onMouseLeave={handleMouseLeave}
          onClick={handleCopy}
        >
          {address && truncateAddress(address, 5)}
          {isCopied ? (
            <span className={styles.copiedText}>copied</span>
          ) : (
            <CopyIcon className={styles.copyIcon} />
          )}
        </span>
      </>
    )
  }
)

AccountAddress.displayName = 'AccountAddress'
