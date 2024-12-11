import { useEffect, useRef } from 'react'

export function useDeepCompareEffect<T extends readonly unknown[]>(
  callback: () => void,
  dependencies: T
) {
  const previousDepsRef = useRef<T | undefined>(undefined)

  useEffect(() => {
    const isDifferent = previousDepsRef.current
      ? JSON.stringify(previousDepsRef.current) !== JSON.stringify(dependencies)
      : true

    if (isDifferent) {
      previousDepsRef.current = dependencies
      callback()
    }
  }, [callback, dependencies])
}
