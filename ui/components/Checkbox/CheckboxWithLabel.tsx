import React, { useCallback } from 'react'
import Checkbox from './Checkbox'
import type { CheckboxValue, CheckboxShape } from './types'
import css from './Checkbox.module.scss'
import cn from 'classnames'

interface CheckboxWithLabelProps {
  label: string
  value?: CheckboxValue
  onChange?: () => void
  shape?: CheckboxShape
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label,
  value,
  onChange,
  shape = 'square',
}) => {
  const checkboxWithLabelClass = cn(css.checkboxWithLabel, {
    [css.checked]: value === 'checked',
    [css.semichecked]: value === 'semichecked',
    [css.undefined]: value === 'undefined',
  })

  return (
    <label className={checkboxWithLabelClass} onClick={onChange}>
      <Checkbox value={value} onChange={onChange} shape={shape} />
      <span>{label}</span>
    </label>
  )
}

export default CheckboxWithLabel
