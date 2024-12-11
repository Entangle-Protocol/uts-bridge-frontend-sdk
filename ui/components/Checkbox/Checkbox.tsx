import React from 'react'
import css from './Checkbox.module.scss'
import type { CheckboxShape, CheckboxValue } from './types'
import cn from 'classnames'

interface CheckboxProps {
  value?: CheckboxValue
  onChange?: () => void
  shape?: CheckboxShape
  isClickable?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
  value = 'undefined',
  onChange,
  shape = 'square',
  isClickable = false,
}) => {
  const ariaCheckedValue: boolean | 'mixed' | undefined =
    value === 'checked' ? true : value === 'semichecked' ? 'mixed' : undefined

  return (
    <div
      className={cn(css.checkbox, css[value], css[shape], {
        [css.nonClickable]: !isClickable,
      })}
      onClick={isClickable ? onChange : undefined}
      aria-checked={ariaCheckedValue}
      role='checkbox'
      tabIndex={isClickable ? 0 : -1}
    />
  )
}

export default Checkbox
