import nglIcon from '@/public/chains/rsz_entangle.png'
import type { StaticImageData } from 'next/image'
import { getNetworkByChainId } from '@/constants/networkConfigs'

function formatAddress(address: string | undefined) {
  return address ? `${address.slice(0, 2)}...${address.slice(-4)}` : ''
}

export const isEntangle = (chainId: number) => [33033, 33133].includes(chainId)

const getNetworkIcon = (chainId: number): StaticImageData => {
  const network = getNetworkByChainId(chainId)
  if (network?.networkIcon) {
    return network.networkIcon
  }
  return nglIcon
}

const getNetworkName = (chainId: number) => {
  const network = getNetworkByChainId(chainId)
  if (network?.networkText) {
    return network.networkText
  }

  return null
}

export { formatAddress, getNetworkIcon, getNetworkName }
