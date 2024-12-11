import cn from 'classnames'
import type { ReactNode } from 'react'
import React, { type MouseEventHandler } from 'react'
import { LoaderStatic } from '@/public/assets/icons/loaders/loader-static'

import css from './Button.module.scss'

type variant = 'outlined' | 'contained'

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  // `secondary` by default
  type?: 'primary' | 'secondary' | 'info'
  disabled?: boolean
  children?: ReactNode
  variant?: variant
  styleFullWidth?: boolean
  stylesLessCurved?: boolean
  styleHigher?: boolean
  buttonType?: 'button' | 'submit'
  loading?: boolean
  loadingText?: string
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  type = 'secondary',
  disabled = false,
  children,
  variant = 'contained',
  styleFullWidth,
  stylesLessCurved,
  styleHigher,
  buttonType = 'button',
  loadingText,
  loading,
}) => {
  const renderLoading = () => {
    return (
      <div className={css.loader}>
        <LoaderStatic className={css.loader__icon} />
        {`${loadingText || 'Pending'}...`}
      </div>
    )
  }

  return (
    <button
      className={cn(
        css.button,
        {
          [css.primary]: type === 'primary',
          [css.secondary]: type === 'secondary',
          [css.info]: type === 'info',
          [css.outlined]: variant === 'outlined',
          [css.contained]: variant === 'contained',
          [css.fullWidth]: styleFullWidth,
          [css.lessCurved]: stylesLessCurved,
          [css.higher]: styleHigher,
          [css.loading]: loading,
        },
        className
      )}
      onClick={onClick}
      type={buttonType}
      data-variant={variant}
      disabled={disabled}
    >
      {loading ? renderLoading() : children}
    </button>
  )
}
