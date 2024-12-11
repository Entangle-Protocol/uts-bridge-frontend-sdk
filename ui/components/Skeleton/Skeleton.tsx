import { memo } from 'react'

import ContentLoader from 'react-content-loader'

export interface SkeletonProps {
  type?: 'rect'
  width: number | string
  height: number
  radius?: number
  className?: string
}

export const Skeleton = memo(
  ({ type = 'rect', width, height, radius = 3, className, ...props }: SkeletonProps) => {
    return (
      <ContentLoader
        speed={2}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor='#181818'
        foregroundColor='#343434'
        className={className}
        {...props}
      >
        {type === 'rect' && (
          <rect x={0} y={0} rx={radius} ry={radius} width={width} height={height} />
        )}
      </ContentLoader>
    )
  }
)

Skeleton.displayName = 'Skeleton'
