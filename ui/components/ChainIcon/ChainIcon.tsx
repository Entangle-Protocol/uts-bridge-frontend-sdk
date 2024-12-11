import { memo, useMemo, useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { getChainIcon, getChainIconForMsg } from '@/core/utils/getChainIIcon'

export interface ChainIconProps extends ImageProps {
  type?: 'rsz' | 'color' | 'grey' | 'table'
}

export const ChainIcon = memo(({ type = 'rsz', src, alt, ...props }: ChainIconProps) => {
  const [isError, setIsError] = useState(false)

  const fallbackSrc = useMemo(() => {
    if (type === 'rsz') {
      return getChainIcon(1234567890) // rsz_undefined.png
    }
    return getChainIconForMsg(1234567890, type) // ${type}/undefined.png
  }, [type])

  return (
    <Image
      {...props}
      alt={alt}
      src={isError ? fallbackSrc : src}
      onError={() => setIsError(true)}
    />
  )
})

ChainIcon.displayName = 'ChainIcon'
