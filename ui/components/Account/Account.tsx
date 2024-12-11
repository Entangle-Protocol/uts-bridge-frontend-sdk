import styles from './Account.module.css'
import Image from 'next/image'
import cn from 'classnames'
import type { MouseEvent } from 'react'
import React, { memo, useCallback, useState } from 'react'
import { getNetworkIcon } from './Account.helpers'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import useOutsideClick from '@/ui/hooks/useOutsideClick'
import AccountDropdown from '@/ui/components/Account/Dropdown/AccountDropdown'
import SwitchChainDropdown from './Dropdown/SwitchChainDropdown'
import { WalletIcon } from '@/public/assets/icons/walletIcon'
import { truncateAddress } from '@/helpers/truncateAddress'

type AccountProps = {
  addresses: (string | undefined)[] // [evm, solana, tron]
  chainId: number
  onConnect: () => void
}

enum NetworkDropdown {
  Evm = 'Evm',
  None = 'None',
}

const Account = ({ addresses, chainId, onConnect }: AccountProps) => {
  const [address] = addresses
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false)
  const [networkDropdownOpen, setNetworkDropdownOpen] = useState(NetworkDropdown.None)
  const isMobile = useMediaQuery(1024)
  const closeAccountDropdown = useCallback(() => {
    setAccountDropdownOpen(false)
  }, [])

  const toggleAccountDropdownOpen = useCallback(() => {
    setAccountDropdownOpen(!accountDropdownOpen)
    setNetworkDropdownOpen(NetworkDropdown.None)
  }, [accountDropdownOpen])

  const toggleNetworkDropdownOpen = useCallback(
    (event: MouseEvent, network: NetworkDropdown) => {
      event.stopPropagation()
      if (networkDropdownOpen === NetworkDropdown.Evm) {
        setNetworkDropdownOpen(NetworkDropdown.None)
      } else if (network === NetworkDropdown.Evm) {
        setNetworkDropdownOpen(NetworkDropdown.Evm)
      }
      setAccountDropdownOpen(false)
    },
    [networkDropdownOpen]
  )

  const closeNetworkDropdown = useCallback(() => {
    setNetworkDropdownOpen(NetworkDropdown.None)
    setAccountDropdownOpen(false)
  }, [])

  const handleClickOutside = useCallback(() => {
    closeNetworkDropdown()
    closeAccountDropdown()
  }, [closeAccountDropdown, closeNetworkDropdown])

  const accountRef = useOutsideClick(handleClickOutside)

  if (!address) {
    return (
      <button className={cn(styles.connectButton)} onClick={onConnect}>
        <WalletIcon />
        {isMobile ? 'Connect' : 'Connect Wallet'}
      </button>
    )
  }

  const evmIcon = getNetworkIcon(chainId)

  return (
    <div
      ref={accountRef}
      className={cn(styles.account_ets, {
        [styles.account_openUdf]: accountDropdownOpen,
      })}
    >
      <div>
        {address && (
          <div
            className={cn(styles.account__network_ets, {
              [styles.account__network_active]: networkDropdownOpen === NetworkDropdown.Evm,
            })}
            onClick={(event) => toggleNetworkDropdownOpen(event, NetworkDropdown.Evm)}
          >
            <Image fill alt='EVM Account Icon' src={evmIcon} />
          </div>
        )}
      </div>
      <div onClick={toggleAccountDropdownOpen} className={styles.account__info_ets}>
        <p className={styles.account__address_ets}>{truncateAddress(address || '', 4)}</p>
        <div className={cn(styles.account__online)}>
          <span />
        </div>
      </div>
      <SwitchChainDropdown
        isOpen={networkDropdownOpen != NetworkDropdown.None}
        address={address}
        chainIcon={evmIcon}
        closeDropdown={closeNetworkDropdown}
        chainId={chainId}
      />
      <AccountDropdown
        isOpen={accountDropdownOpen}
        addresses={addresses}
        closeDropdown={closeAccountDropdown}
        chainId={chainId}
      />
    </div>
  )
}

export default memo(Account)
