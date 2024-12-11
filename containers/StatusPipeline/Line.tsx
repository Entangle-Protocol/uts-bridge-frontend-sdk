import { memo } from 'react'
import cn from 'classnames'
import classes from './StatusPipeline.module.scss'

interface ILineProps {
  isDone: boolean
  isLoading: boolean
  isGray?: boolean
}

const Line = memo(({ isDone, isLoading, isGray }: ILineProps) => {
  return (
    <div
      className={cn(classes.line, {
        [classes.lineLoading]: isLoading,
        [classes.lineDone]: isDone,
        [classes.lineGray]: isGray,
      })}
    />
  )
})

Line.displayName = 'Line'

export { Line }
