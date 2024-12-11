import { memo } from 'react'
import { useEffect, useRef } from 'react'
// @ts-ignore
import jazzicon from '@metamask/jazzicon'

interface JazziconProps {
  address: string
  diameter?: number
  className?: string
}

export const JazzIcon = memo(({ address, diameter = 40, className = '' }: JazziconProps) => {
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (iconRef.current && address) {
      const numericSeed = parseInt(address.slice(2, 10), 16)
      const icon = jazzicon(diameter, numericSeed)
      iconRef.current.innerHTML = ''
      iconRef.current.appendChild(icon)
    }
  }, [address, diameter])

  return (
    <div ref={iconRef} style={{ width: diameter, height: diameter }} className={className} />
  )
})

JazzIcon.displayName = 'JazzIcon'
