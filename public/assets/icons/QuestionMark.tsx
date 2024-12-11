import { memo } from 'react'

interface QuestionMarkProps {
  width?: number
  height?: number
  className?: string
}

export const QuestionMark = memo(
  ({ width = 14, height = 14, className, ...props }: QuestionMarkProps) => {
    return (
      <svg
        viewBox='0 0 14 14'
        className={className}
        width={width}
        height={height}
        fill='none'
        {...props}
      >
        <g clipPath='url(#clip0_13446_47048)'>
          <path
            d='M5.3038 5.2474C5.44095 4.85754 5.71164 4.52879 6.06794 4.31939C6.42424 4.10999 6.84316 4.03344 7.25049 4.10331C7.65782 4.17318 8.02728 4.38495 8.29343 4.70112C8.55958 5.01729 8.70525 5.41745 8.70464 5.83073C8.70464 6.9974 6.95464 7.58073 6.95464 7.58073M7.0013 9.91406H7.00714M12.8346 6.9974C12.8346 10.2191 10.223 12.8307 7.0013 12.8307C3.77964 12.8307 1.16797 10.2191 1.16797 6.9974C1.16797 3.77573 3.77964 1.16406 7.0013 1.16406C10.223 1.16406 12.8346 3.77573 12.8346 6.9974Z'
            stroke='#8B8B8B'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_13446_47048'>
            <rect width='14' height='14' fill='white' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)

QuestionMark.displayName = 'QuestionMark'
