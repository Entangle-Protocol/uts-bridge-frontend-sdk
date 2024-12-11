import cn from 'classnames'
import styles from '@/ui/components/Account/Account.module.css'
import { JazzIcon } from '../../JazzIcon/JazzIcon'
import { AccountAddress } from '@/ui/components/Account/Dropdown/AccountAddress'
import React, { useState } from 'react'

interface IProps {
  address: string
  disconnect: () => void
  children?: React.ReactNode
}

const AccountCard = ({ address, children, disconnect }: IProps) => {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <>
      <div>
        <div className={styles.renderSection}>
          <div className={cn(styles.renderItem, styles.accountBalanceContainer)}>
            <div
              className={cn(styles.chainIcon, styles.accountAddressContainer, {
                [styles.active]: isCopied,
              })}
            >
              <div className={cn(styles.chainDropdownIcon, styles.jassDropdownIcon)}>
                <JazzIcon address={address} diameter={24} />
              </div>
              <AccountAddress
                address={address}
                isCopied={isCopied}
                setIsCopied={setIsCopied}
              />
            </div>
            <div onClick={disconnect} className={styles.accountDropdownDisconnect}>
              Disconnect
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default AccountCard
