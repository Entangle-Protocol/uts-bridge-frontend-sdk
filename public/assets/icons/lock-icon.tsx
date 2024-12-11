import { memo } from 'react'

export interface LockIconProps extends React.SVGProps<SVGSVGElement> {}

export const LockIcon = memo(({ ...props }: LockIconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 16' {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5.34 7.333V4.667a3.333 3.333 0 1 1 6.666 0v2.666m-8 0h9.333c.737 0 1.334.597 1.334 1.334v4.666c0 .737-.597 1.334-1.334 1.334H4.006a1.333 1.333 0 0 1-1.333-1.334V8.667c0-.737.597-1.334 1.333-1.334Z'
      />
    </svg>
  )
})

LockIcon.displayName = 'LockIcon'
