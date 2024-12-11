import React, { memo, useCallback, useState } from 'react'
import Dropdown from '@/ui/components/Account/Dropdown/Dropdown'
import styles from '@/ui/components/Account/Account.module.css'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { useSwitchChain } from 'wagmi'
import cn from 'classnames'
import { CloseIcon } from '@/public/assets/icons/close'
import { networkOptions } from '@/constants/networkConfigs'
import type { IBridgeParticipantNetwork } from '@/containers/Bridge/bridgeTypes'
import { JazzIcon } from '../../JazzIcon/JazzIcon'
import { AccountAddress } from '@/ui/components/Account/Dropdown/AccountAddress'
import { useAllTokens } from '@/ui/hooks/useAllTokens'

interface SwitchChainDropdownProps {
  isOpen: boolean
  closeDropdown: () => void
  address?: string
  chainIcon: StaticImageData
  chainId: number
}

const SwitchChainDropdown = ({
  isOpen,
  closeDropdown,
  address,
  chainIcon,
  chainId,
}: SwitchChainDropdownProps) => {
  const { allTokensByChainId } = useAllTokens()
  const { switchChain } = useSwitchChain()
  const [isCopied, setIsCopied] = useState(false)

  const handleSwitchChain = useCallback(
    (chain: IBridgeParticipantNetwork) => {
      switchChain({ chainId: chain.chainId })
    },
    [switchChain]
  )

  return (
    <Dropdown isOpen={isOpen}>
      <div className={styles.renderContainer}>
        <div className={styles.switchChainDropdownHeader}>
          <div className={styles.switchChainDropdownLabel}>
            <div className={cn(styles.chainDropdownIcon, styles.iconBadge)}>
              <Image src={chainIcon} alt='Chain Icon' fill />
            </div>
            <div className={styles.accountIconContainer}>
              <JazzIcon address={address || ''} diameter={39} />
            </div>
            <div className={styles.switchChainNameContainer}>
              <div className={styles.switchChainDropdownName}></div>
              {address && (
                <div
                  className={cn(styles.switchChainAddress, {
                    [styles.active]: isCopied,
                  })}
                >
                  <AccountAddress
                    address={address}
                    isCopied={isCopied}
                    setIsCopied={setIsCopied}
                  />
                </div>
              )}
            </div>
          </div>
          <button className='w-5 h-5' onClick={closeDropdown}>
            <CloseIcon type='base' className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.switchChainDropdownSubheader}>Switch Network To</div>
        <div className={styles.renderBorder}></div>
        <div className={styles.switchChainDropdownChains}>
          {networkOptions
            .filter(({ chainId }) => allTokensByChainId[chainId]?.length)
            .map((option) => {
              return (
                <button
                  onClick={() => handleSwitchChain(option)}
                  className={cn(styles.chain, {
                    [styles.chainConnected]: option.chainId === chainId,
                  })}
                  key={option.chainId}
                >
                  <Image
                    src={option.networkIcon || ''}
                    alt={option.networkText}
                    width={32}
                    height={32}
                  />
                  {option.networkText}
                </button>
              )
            })}
        </div>
      </div>
    </Dropdown>
  )
}

export default memo(SwitchChainDropdown)
