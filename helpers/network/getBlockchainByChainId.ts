import { ChainIdToBlockchainMatch } from '@/constants/networkConfigs'

export const isEVMlikeChain = (chainId: number | string) => {
  return ChainIdToBlockchainMatch[chainId] === 'EVM'
}
