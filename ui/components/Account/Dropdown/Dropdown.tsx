import cn from 'classnames'
import styles from './Dropdown.module.scss'

import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface DropdownProps {
  children: ReactNode
  opClassName?: string
  isOpen: boolean
}

const Dropdown: FC<DropdownProps> = ({ children, isOpen }) => {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.container, { [styles.open]: isOpen })}>{children}</div>
    </div>
  )
}

export default memo(Dropdown)
