import React, { memo } from 'react'
import Dropdown from '@/ui/components/Account/Dropdown/Dropdown'
import styles from '@/ui/components/Account/Account.module.css'
import useAccount from '@/hooks/useAccount'
import AccountCard from './AccountCard'

interface AccountDropdownProps {
  isOpen: boolean
  addresses: (string | undefined)[] // [evm, solana, tron]
  closeDropdown: () => void
  chainId: number
}

const AccountDropdown = ({ isOpen, addresses }: AccountDropdownProps) => {
  const [address] = addresses

  const { disconnect: evmDisconnect } = useAccount()

  return (
    <Dropdown isOpen={isOpen}>
      <div className={styles.renderContainer}>
        {address && (
          <>
            <AccountCard address={address} disconnect={evmDisconnect}></AccountCard>
          </>
        )}
      </div>
    </Dropdown>
  )
}

export default memo(AccountDropdown)
