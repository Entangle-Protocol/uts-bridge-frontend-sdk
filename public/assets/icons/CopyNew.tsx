import { memo } from 'react'

interface CopyNewProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  className?: string
}

export const CopyNew = memo(
  ({ width = 16, height = 16, className, ...props }: CopyNewProps) => {
    return (
      <svg
        width={width}
        height={height}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 16'
        className={className}
        {...props}
      >
        <g clipPath='url(#a)'>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.665 10.67c-.733 0-1.333-.6-1.333-1.334V2.669c0-.733.6-1.333 1.333-1.333h6.667c.733 0 1.333.6 1.333 1.333m-4 2.667h6.667c.736 0 1.333.597 1.333 1.333v6.667c0 .736-.597 1.333-1.333 1.333H6.665a1.333 1.333 0 0 1-1.333-1.333V6.669c0-.736.597-1.333 1.333-1.333Z'
          />
        </g>
        <defs>
          <clipPath id='a'>
            <path fill='#fff' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)

CopyNew.displayName = 'CopyNew'
