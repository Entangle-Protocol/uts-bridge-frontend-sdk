import { useAppDispatch, useStore } from '@/core/store'
import { networkConfigsMainnet } from '@/constants/networkConfigs'

const useBridgeWalletConnect = () => {
  const dispatch = useAppDispatch()
  const {
    actions: {
      App: { setWalletConnectChainId },
    },
  } = useStore((store) => ({
    App: store.AppEntity,
  }))

  const onConnectWallet = () => {
    dispatch(setWalletConnectChainId(networkConfigsMainnet.Ethereum.chainId))
  }

  return { onConnectWallet }
}

export default useBridgeWalletConnect
