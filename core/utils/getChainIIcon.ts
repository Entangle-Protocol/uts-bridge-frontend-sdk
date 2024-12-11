import { chainList } from './chainList'

export const getChainIcon = (chainId: keyof typeof chainList) => {
  return `/chains/rsz_${chainList[chainId]}.png?chain=${chainId}`
}

export const getChainIconForMsg = (
  chainId: keyof typeof chainList,
  type: 'color' | 'grey' | 'table' = 'table'
) => `/chains/msg/${type}/${chainList[chainId]}.png`
