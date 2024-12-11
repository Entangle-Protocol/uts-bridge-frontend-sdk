import type { ChangeEvent, FC } from 'react'
import { type KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react'
import cx from 'classnames'

import styles from './Destination.module.scss'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import type { IState } from '@/core/store'
import { useAppDispatch } from '@/core/store'
import { useSelector } from 'react-redux'
import { truncateAddress } from '@/helpers/truncateAddress'
import useBridgeWallet from '@/hooks/useBridgeWallet'
import { WalletIcon } from '@/public/assets/icons/Wallet'
import { PlusIcon } from '@/public/assets/icons/PlusIcon'
import useOutsideClick from '@/ui/hooks/useOutsideClick'
import { ConnectWalletButton } from '@/containers/Bridge/InteractionBlock/ConnectWalletButton'
import useAccount from '@/hooks/useAccount'
import { useIsInvalidToAddress } from '@/app/bridge/useIsInvalidToAddress'
import type { Address } from 'viem'

export interface IDestinationBlock {
  setAddressError: (flag: boolean) => void
}

export const DestinationBlock: FC<IDestinationBlock> = ({ setAddressError }) => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const destinationAddress = useSelector(
    (state: IState) => state.BridgeEntity.destinationAddress
  )
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)

  const onHandleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    dispatch(BridgeEntity.actions.setDestinationAddress(value))
    setAddressError(false)
  }

  const error = useIsInvalidToAddress()
  const inputExists = !!chains.to && !!destinationAddress

  const { addressFrom } = useBridgeWallet()

  const { address: evmAddress } = useAccount()

  const defaultDestinationAddress = useMemo(() => {
    return addressFrom as Address
  }, [addressFrom])

  useEffect(() => {
    dispatch(BridgeEntity.actions.setDestinationAddress(defaultDestinationAddress))
    setAddressError(false)
  }, [defaultDestinationAddress, dispatch, setAddressError])

  const handleCloseInput = useCallback(() => {
    if (open) {
      setOpen(false)
    }
    if (error) {
      dispatch(BridgeEntity.actions.setDestinationAddress(''))
    }
  }, [dispatch, error, open])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleCloseInput()
      }
    },
    [handleCloseInput]
  )

  const ref = useOutsideClick(() => {
    handleCloseInput()
  })

  if (!chains.to && !chains.from) {
    return null
  }

  if (!destinationAddress && !addressFrom && !defaultDestinationAddress) {
    return <ConnectWalletButton />
  }

  if (!open) {
    if (destinationAddress) {
      return (
        <div className={styles.otherRoot} onClick={() => setOpen(true)}>
          <span className={styles.label}>
            Other wallet:{' '}
            <span className={styles.addressNode}>
              {truncateAddress(destinationAddress as string, 4)}
            </span>
          </span>
        </div>
      )
    }
    return (
      <div className={styles.currentRoot}>
        <span className={styles.label}>
          Current:{' '}
          <span className={styles.addressNode}>
            {truncateAddress(destinationAddress as string, 4)}
          </span>
        </span>
        <div className={styles.iconWrapper} onClick={() => setOpen(true)}>
          <PlusIcon className={styles.plusIcon} />
          <WalletIcon className={styles.walletIcon} />
        </div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cx(styles.inputWrapper, {
        [styles.inputWrapperError]: error && inputExists,
        [styles.inputWrapperSuccess]: !error && inputExists,
      })}
    >
      <input
        className={cx(styles.input)}
        placeholder='Input other wallet address'
        value={destinationAddress}
        onChange={onHandleChange}
        onKeyDown={handleKeyDown}
      />

      <div className={styles.smallIconWrapper}>
        {error && inputExists && <div className={styles.errorText}>Invalid address</div>}
        <WalletIcon
          width={20}
          height={19}
          className={styles.walletIconSmall}
          onClick={handleCloseInput}
        />
      </div>
    </div>
  )
}
