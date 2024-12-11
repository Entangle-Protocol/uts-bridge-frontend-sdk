'use client'

import styles from './HeaderBurger.module.css'
import Image from 'next/image'

import { usePathname } from 'next/navigation'
import { memo, useEffect, useState } from 'react'
import Account from '@/repo/ui/components/Account'
import classNames from 'classnames'
import cn from 'classnames'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import disconnectIcon from '@/public/assets/icons/disconnect-icon.svg'
import { IS_ETS_DOMAIN } from '@/constants/common'
import { ArrowLeft } from '@/public/assets/icons/arrow-left'
import { useReturnBack } from '@/providers/ReturnBackContext/ReturnBackContext'

type HeaderBurgerProps = {
  addresses: (string | undefined)[]
  basePath?: string
  chainId: number
  onConnect: () => void
  onDisconnect: () => void
}

const HeaderBurger = ({ chainId, onConnect, onDisconnect, addresses }: HeaderBurgerProps) => {
  const pathname = usePathname()
  const [isOpen, setOpen] = useState(false)
  const isMobile = useMediaQuery(1024)
  const { goBackState, content: returnBackContent, showBackButton } = useReturnBack()

  useEffect(() => {
    const rootElement = document.getElementById('root')
    if (!rootElement) {
      return () => void 1
    }
    if (isOpen) {
      rootElement.classList.add('overflow-hidden')
    } else {
      rootElement.classList.remove('overflow-hidden')
    }

    return () => {
      rootElement.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <div className={cn(styles.headerBurger, { [styles.headerBurgerEts]: IS_ETS_DOMAIN })}>
        {showBackButton && (
          <button className={styles.returnBack} onClick={goBackState}>
            <ArrowLeft className={styles.returnBack__icon} />
            <span className={styles.returnBack__label}>{`Back to ${returnBackContent}`}</span>
          </button>
        )}

        <Account addresses={addresses} onConnect={onConnect} chainId={chainId} />
      </div>
      {isOpen && (
        <div className={styles.headerBurger__menu}>
          <div>
            <div
              className={classNames(
                styles.headerBurger__item,
                styles.headerBurger__disconnectContainer,
                {
                  [styles.headerBurger__disconnectContainer_visible]:
                    addresses.filter(Boolean).length,
                }
              )}
            >
              <Image src={disconnectIcon.src} alt='Disconnect' width={20} height={20} />
              <button onClick={onDisconnect}>Disconnect</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(HeaderBurger)
