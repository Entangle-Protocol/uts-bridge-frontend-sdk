import { memo, useCallback } from 'react'

import styles from './ConnectWalletButton.module.scss'
import { PlusIcon } from '@/public/assets/icons/PlusIcon'
import { WalletIcon } from '@/public/assets/icons/Wallet'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import useAccount from '@/hooks/useAccount'

export interface ConnectWalletButtonProps {
  from?: boolean
}

export const ConnectWalletButton = memo(({ from }: ConnectWalletButtonProps) => {
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const neededChain = from ? chains.from : chains.to
  const { walletConnect } = useAccount()
  const handleConnect = useCallback(() => {
    walletConnect('metaMaskSDK', neededChain).then()
  }, [neededChain, walletConnect])
  return (
    <div className={styles.iconWrapper} onClick={handleConnect}>
      <PlusIcon className={styles.plusIcon} />
      <div className={styles.text}>Connect wallet</div>
      <WalletIcon className={styles.walletIcon} />
    </div>
  )
})

ConnectWalletButton.displayName = 'ConnectWalletButton'
