import { memo, useState } from 'react'

import styles from './Tabs.module.scss'
import clsx from 'classnames'

export interface ITab {
  value: string
  label: string
  amount?: number | string
}

export interface ITabsProps {
  value: string
  onChange: (value: string) => void
  tabs: ITab[]
  className?: string
}

export const Tabs = memo(({ value, onChange, tabs, className }: ITabsProps) => {
  return (
    <ul className={clsx(styles.tabs, className)}>
      {tabs.map((tab) => {
        return (
          <li className={styles.li} key={tab.value}>
            <div
              className={clsx(styles.item, {
                [styles.item_active]: value === tab.value,
              })}
              onClick={() => onChange(tab.value)}
            >
              {tab.label}
              {!!tab.amount && (
                <span
                  className={clsx({ [styles.amount]: value === tab.value })}
                >{` (${tab.amount})`}</span>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
})

Tabs.displayName = 'Tabs'
