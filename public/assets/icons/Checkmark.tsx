import { memo } from 'react'

export const Checkmark = memo(
  ({ className, width, height }: { className?: string; width: number; height: number }) => {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox='0 0 21 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='10.5652'
          cy='10.5'
          r='9.60729'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='0.785414'
        />
        <path
          d='M7.07812 10.9553L9.68143 14.1371L14.888 7.77344'
          stroke='#151E01'
          strokeWidth='1.04348'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    )
  }
)

Checkmark.displayName = 'Checkmark'
