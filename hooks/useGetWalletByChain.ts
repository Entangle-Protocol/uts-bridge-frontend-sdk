import useAccount from '@/hooks/useAccount'
import { isEVMlikeChain } from '@/helpers/network/getBlockchainByChainId'

export const useGetWalletByChain = (chainId: number | undefined) => {
  const { address: etherAddress } = useAccount()

  if (!chainId) {
    return
  }

  if (isEVMlikeChain(chainId)) {
    return etherAddress
  }
}
