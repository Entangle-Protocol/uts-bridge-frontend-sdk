'use client'
import cn from 'classnames'
import styles from './Header.module.css'
import { useCallback, useMemo } from 'react'
import Account from '@/ui/components/Account'
import { Toasts } from '@/containers/Header/Toasts'
import { useAppDispatch, useStore } from '@/core/store'
import useAccount from '@/hooks/useAccount'
import { IS_ETS_DOMAIN } from '@/constants/common'
import { networkConfigs } from '@/constants/networkConfigs'
import HeaderBurger from '@/containers/HeaderBurger'

const basePath = undefined

export const Header = () => {
  const dispatch = useAppDispatch()

  const { address: evmAddress, chainId, disconnect: disconnectEvmWallet } = useAccount()

  const addresses = useMemo(() => [evmAddress], [evmAddress])
  const {
    actions: {
      App: { setWalletConnectChainId },
    },
  } = useStore((store) => ({
    App: store.AppEntity,
  }))

  const handleConnectWalletClick = () => {
    dispatch(setWalletConnectChainId(networkConfigs.Ethereum.chainId))
  }

  const handleDisconnectWallet = useCallback(async () => {
    disconnectEvmWallet()
  }, [disconnectEvmWallet])

  return (
    <header className='sticky top-0 z-[var(--z-index-max)] w-full bg-neutral-10'>
      <div className='lg:hidden'>
        <HeaderBurger
          addresses={addresses}
          chainId={chainId || 0}
          basePath={basePath}
          onConnect={handleConnectWalletClick}
          onDisconnect={handleDisconnectWallet}
        />
      </div>
      <div className='hidden lg:block'>
        <div className={cn(styles.container, { [styles.containerUts]: IS_ETS_DOMAIN })}>
          <div className={styles.firstWrap}></div>
          <div className={styles.right}>
            <Account
              addresses={addresses}
              onConnect={handleConnectWalletClick}
              chainId={chainId || 0}
            />
          </div>
        </div>
        <Toasts />
      </div>
    </header>
  )
}
