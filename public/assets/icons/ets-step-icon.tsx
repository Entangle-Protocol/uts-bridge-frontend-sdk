import type { FC } from 'react'
import { memo } from 'react'

interface EtsStepIconProps {
  className?: string
  type?: 'base' | 'passed'
}

export const EtsStepIcon: FC<EtsStepIconProps> = memo(({ className, type = 'base' }) => {
  if (type === 'passed') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 16'
        className={className}
      >
        <circle cx='8' cy='8' r='5' fill='#0F3E48' />
        <path
          stroke='#66E3FF'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M10.665 6 7 9.667 5.332 8'
        />
        <circle cx='8' cy='8' r='7' stroke='#3B91A3' strokeWidth='2' />
      </svg>
    )
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      className={className}
    >
      <circle cx='8' cy='8' r='5' fill='#8B8B8B' />
      <circle cx='8' cy='8' r='7.01235' stroke='#8B8B8B' strokeWidth='1.97531' />
    </svg>
  )
})

EtsStepIcon.displayName = 'EtsStepIcon'
