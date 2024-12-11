'use client'
import type { FC } from 'react'
import cx from 'classnames'
import styles from './ConnectWallet.module.scss'
import { truncateAddress } from '@/helpers/truncateAddress'
import useBridgeWalletConnect from '@/hooks/useBridgeWalletConnect'
import { useSelector } from 'react-redux'
import type { IState } from '@/core/store'
import { ConnectWalletButton } from '@/containers/Bridge/InteractionBlock/ConnectWalletButton'

interface IConnectWallet {
  className?: string
  address?: string
}

export const ConnectWallet: FC<IConnectWallet> = ({ className, address }) => {
  const { onConnectWallet } = useBridgeWalletConnect()

  const chains = useSelector((state: IState) => state.BridgeEntity.chains)

  if (!chains.from) {
    return null
  }

  if (!address) {
    return <ConnectWalletButton from />
  }

  return (
    <div className={cx(styles.connect, className)}>
      {!address ? (
        <button className={styles.button} onClick={onConnectWallet}>
          Connect Wallet
        </button>
      ) : (
        <span className={styles.label}>
          Current: <span className={styles.addressNode}>{truncateAddress(address, 4)}</span>
        </span>
      )}
    </div>
  )
}
