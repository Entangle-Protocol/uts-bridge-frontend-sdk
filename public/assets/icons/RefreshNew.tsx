import { memo } from 'react'

interface RefreshNewProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  className?: string
}

export const RefreshNew = memo(
  ({ width = 16, height = 16, className, ...props }: RefreshNewProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 16'
        width={width}
        height={height}
        className={className}
        {...props}
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M14 8a6 6 0 0 0-6-6 6.5 6.5 0 0 0-4.493 1.827L2 5.333m0 0V2m0 3.333h3.333M2 8a6 6 0 0 0 6 6 6.5 6.5 0 0 0 4.493-1.827L14 10.667m0 0h-3.333m3.333 0V14'
        />
      </svg>
    )
  }
)

RefreshNew.displayName = 'RefreshNew'
