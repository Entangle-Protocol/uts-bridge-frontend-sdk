import { useCallback, useEffect, useRef, useState } from 'react'
import moment from 'moment'

interface ITimePassed {
  createdAt: string | number | undefined
  updatedAt: string | number | undefined
  isFinished: boolean
}

export const useTimePassed = ({ createdAt, updatedAt, isFinished }: ITimePassed) => {
  const iRef = useRef<NodeJS.Timeout>()
  const [timePassed, setTimePassed] = useState('')

  const updateTimePassed = useCallback(() => {
    if (!createdAt) {
      return
    }
    const dateFrom = new Date(createdAt)
    const dateTo = moment(isFinished && updatedAt ? new Date(updatedAt || '') : new Date())
    const durationMs = dateTo.diff(dateFrom)
    const duration = moment.duration(Math.max(durationMs, 1000)) // Minimal time is 1 second

    // Get the hours, minutes, and seconds
    const hours = Math.floor(duration.asHours())
    const minutes = Math.floor(duration.minutes())
    const seconds = Math.floor(duration.seconds())

    if (Number.isNaN(hours) || Number.isNaN(minutes) || Number.isNaN(seconds)) {
      return
    }

    setTimePassed(`${hours}h ${minutes}m ${seconds}s`)
  }, [createdAt, updatedAt, isFinished])

  useEffect(() => {
    clearInterval(iRef.current)
    updateTimePassed()
    if (isFinished) {
      return
    }
    iRef.current = setInterval(updateTimePassed, 1000)
    return () => clearInterval(iRef.current)
  }, [updateTimePassed, isFinished])

  return timePassed
}
