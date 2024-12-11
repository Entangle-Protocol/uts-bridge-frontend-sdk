import type { FC } from 'react'

interface IWarningIcon {
  className?: string
  color?: string
}

export const WarningIcon: FC<IWarningIcon> = ({ className, color }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 16 16'
    >
      <path
        stroke={color || 'currentColor'}
        fill={color}
        d='M7.567 1.75a.5.5 0 0 1 .866 0l6.928 12a.5.5 0 0 1-.433.75H1.072a.5.5 0 0 1-.433-.75l6.928-12Z'
      />
      <path stroke='currentColor' strokeLinecap='round' d='M8 6v4.5M8 12h0' />
    </svg>
  )
}
