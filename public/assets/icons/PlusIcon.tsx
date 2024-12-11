import { memo } from 'react'

interface IPlusIconProps {
  width?: number
  height?: number
  className?: string
}

export const PlusIcon = memo(({ width = 17, height = 17 }: IPlusIconProps) => {
  return (
    <svg width={17} height={17} viewBox='0 0 17 17' fill='none'>
      <path
        d='M3.49219 8.46289H12.8255'
        stroke='#06E097'
        strokeWidth='1.12'
        strokeLinecap='round'
      />
      <path
        d='M8.15625 3.79688L8.15625 13.1302'
        stroke='#06E097'
        strokeWidth='1.12'
        strokeLinecap='round'
      />
    </svg>
  )
})

PlusIcon.displayName = 'PlusIcon'
