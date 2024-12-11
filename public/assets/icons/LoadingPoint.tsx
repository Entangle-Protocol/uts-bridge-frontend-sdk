import { memo } from 'react'

export const LoadingPoint = memo(
  ({ className, width, height }: { className?: string; width: number; height: number }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox='0 0 21 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <circle
          cx='10.5977'
          cy='10.5'
          r='9.67391'
          stroke='currentColor'
          strokeOpacity='0.4'
          strokeWidth='0.652174'
        />
        <circle
          cx='10.602'
          cy='10.4995'
          r='5.12846'
          fill='currentColor'
          stroke='#262626'
          strokeWidth='0.652174'
        />
      </svg>
    )
  }
)

LoadingPoint.displayName = 'LoadingPoint'
