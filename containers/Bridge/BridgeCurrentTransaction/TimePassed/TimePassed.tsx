import { memo } from 'react'

import classes from './TimePassed.module.scss'
import { useTimePassed } from './useTimePassed'

export interface TimePassedProps {
  createdAt: string | number | undefined
  updatedAt: string | number | undefined
  isFinished: boolean
}

export const TimePassed = memo(({ createdAt, updatedAt, isFinished }: TimePassedProps) => {
  const timePassed = useTimePassed({
    createdAt,
    updatedAt,
    isFinished,
  })
  if (!createdAt) {
    return null
  }

  return (
    <div className={classes.status}>
      <div className={classes.time}>{timePassed}</div>
    </div>
  )
})

TimePassed.displayName = 'TimePassed'
