import { LoadingPoint } from '@/public/assets/icons/LoadingPoint'
import { Checkmark } from '@/public/assets/icons/Checkmark'
import cn from 'classnames'
import failmark from '@/public/assets/icons/failmark.svg'
import emptyPoint from '@/public/assets/icons/empty-point.svg'
import Image from 'next/image'
import { memo } from 'react'
import classes from './StatusPipeline.module.scss'

interface IPointProps {
  isDone: boolean
  isLoading: boolean
  isFailed: boolean
  isGray: boolean
}

const Point = memo(({ isDone, isLoading, isFailed, isGray }: IPointProps) => {
  if (isFailed) {
    return <Image src={failmark.src} width={20} height={20} alt='failed mark' />
  }
  if (isDone) {
    return (
      <Checkmark
        className={cn(classes.checkmark, { [classes.grayed]: isGray })}
        width={20}
        height={20}
      />
    )
  }
  if (isLoading) {
    return (
      <LoadingPoint
        className={cn({ [classes.grayed]: isGray }, classes.loadingPoint)}
        width={20}
        height={20}
      />
    )
  }
  return <Image src={emptyPoint.src} width={20} height={20} alt='empty point' />
})

Point.displayName = 'Point'

export { Point }
