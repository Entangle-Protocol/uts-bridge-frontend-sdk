import { memo } from 'react'

export interface WarningIconProps extends React.SVGProps<SVGSVGElement> {}

export const WarningIcon = memo(({ ...props }: WarningIconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16' {...props}>
      <g fill='#F25A5A'>
        <path d='M7.301 6.602h1.4V10.1h-1.4V6.6Zm0 4.198h1.4v1.4H7.3v-1.4Z' />
        <path d='M9.238 2.54a1.398 1.398 0 0 0-1.237-.743c-.52 0-.994.285-1.237.744l-5.135 9.701a1.393 1.393 0 0 0 .038 1.377 1.385 1.385 0 0 0 1.198.678h10.272a1.39 1.39 0 0 0 1.2-.678 1.393 1.393 0 0 0 .037-1.377L9.238 2.54ZM2.865 12.897l5.136-9.701 5.14 9.701H2.865Z' />
      </g>
    </svg>
  )
})

WarningIcon.displayName = 'WarningIcon'
