'use client'
import Image from 'next/image'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import styles from './styles.module.scss'
import cross from '@/public/assets/icons/closeDrop.svg'

import { useStore } from '@/core/store'
import useAccount from '@/hooks/useAccount'
import { WALLETS } from './constants'

const ConnectWallet = () => {
  const dispatch = useDispatch()

  const { walletConnect } = useAccount()

  const {
    store: {
      App: { walletConnectChainId },
    },
    actions: {
      App: { setWalletConnectChainId },
    },
  } = useStore((store) => ({
    App: store.AppEntity,
  }))

  const handleCloseModal = () => dispatch(setWalletConnectChainId())

  const handleConnectWallet = (connector: string, disabled: boolean) => () => {
    if (disabled) {
      return
    }

    walletConnect(connector, walletConnectChainId)

    handleCloseModal()
  }

  if (!walletConnectChainId) {
    return null
  }
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.container, {
          [styles.fadeEnter as string]: walletConnectChainId,
          [styles.fadeExit as string]: !walletConnectChainId,
          [styles.hidden as string]: !walletConnectChainId,
        })}
      >
        <div className={styles.heading}>
          <h1 className={styles.title}>Connect to Wallet</h1>
          <div className={styles.closeIcon} onClick={handleCloseModal}>
            <Image fill src={cross} quality={100} alt='entangle-close-asset' />
          </div>
        </div>
        <p className={styles.help}>
          Connecting your wallet is like “logging on” to Web3. <br /> Select your wallet from
          the options to get started.
        </p>
        <div className={styles.walletItemsWrapper}>
          {WALLETS.map(({ title, image, connector, disabled }, idx) => (
            <div
              className={classNames(styles.walletItem, disabled && styles.disabledNetwork)}
              key={idx}
              onClick={handleConnectWallet(connector, disabled)}
            >
              <p className={styles.walletTitle}>{title}</p>
              <div className={styles.walletAsset}>
                <Image fill src={image} quality={100} alt={`entangle-${image}-asset`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConnectWallet
