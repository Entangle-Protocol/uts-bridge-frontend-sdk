import { memo } from 'react'

export interface CloseIconProps extends React.SVGProps<SVGSVGElement> {
  type: 'base' | 'new' | 'thin'
}

export const CloseIcon = memo(({ type, ...props }: CloseIconProps) => {
  if (type === 'thin') {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 5 5 15M5 5l10 10'
        />
      </svg>
    )
  }

  if (type === 'new') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='15'
        height='15'
        fill='none'
        viewBox='0 0 15 15'
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M.945.16a.556.556 0 0 0-.78.792l6.601 6.497-6.603 6.603a.556.556 0 0 0 .785.786l6.61-6.61 6.497 6.397a.556.556 0 0 0 .78-.792l-6.491-6.39L14.838.948a.556.556 0 0 0-.786-.785l-6.5 6.5L.945.16Z'
          clipRule='evenodd'
        />
      </svg>
    )
  }

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18 6L6 18'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 6L18 18'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
})

CloseIcon.displayName = 'CloseIcon'
