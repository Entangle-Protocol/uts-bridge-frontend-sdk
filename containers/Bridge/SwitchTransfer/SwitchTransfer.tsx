'use client'
import type { FC } from 'react'
import React from 'react'
import cx from 'classnames'
import styles from './SwitchTransfer.module.scss'
import { SwitchIcon } from '@/public/assets/icons/static-icon'

interface ISwitchTransfer {
  className?: string
  onSwitch: () => void
  wrapped?: boolean
}

export const SwitchTransfer: FC<ISwitchTransfer> = ({ className, onSwitch, wrapped }) => {
  return (
    <button className={cx(styles.switch, className)} onClick={onSwitch}>
      <SwitchIcon wrapped={wrapped} />
    </button>
  )
}
