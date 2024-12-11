import type { ChangeEvent, ReactNode } from 'react'
import { memo, useCallback } from 'react'
import cn from 'classnames'
import type { SelectProps as NextSelectProps } from '@nextui-org/select'
import { Select as NextSelect } from '@nextui-org/select'

import classes from './Select.module.scss'

interface Option {
  label: string
  value: string | number
}

export interface SelectProps
  extends Omit<NextSelectProps, 'label' | 'options' | 'value' | 'onValueChange' | 'children'> {
  label?: string
  items: Option[]
  value?: string | number | string[] | number[]
  onValueChange: (value: string | number) => void
  renderItem?: (option: Option) => ReactNode
  children: (item: Record<string, string>) => ReactNode
}

export const Select = memo(
  ({
    value,
    items,
    label,
    onChange,
    onValueChange,
    // renderItem = defaultRender,
    children,
    renderValue,
    ...rest
  }: SelectProps) => {
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        onValueChange(e.target.value)
      },
      [onValueChange]
    )

    return (
      <div className={classes.root}>
        {label && <div className={classes.label}>{label}</div>}
        <NextSelect
          selectedKeys={[String(value)]}
          className={classes.root}
          radius='sm'
          onChange={handleChange}
          color='secondary'
          classNames={{
            popoverContent: classes.popover,
            trigger: cn(
              classes.wrapper,
              classes.size,
              'data-[open=true]:border-[#069a69]',
              'data-[hover=true]:border-[#069a69]',
              'data-[focus=true]:border-[#069a69]'
            ),
            value: classes.value,
          }}
          items={items}
          renderValue={renderValue}
          {...rest}
        >
          {/*@ts-ignore*/}
          {children}
        </NextSelect>
      </div>
    )
  }
)

Select.displayName = 'Select'
