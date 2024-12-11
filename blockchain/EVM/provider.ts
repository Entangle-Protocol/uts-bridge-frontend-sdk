import { createConfig, http } from 'wagmi'
import type { Chain } from 'wagmi/chains'
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  coreDao,
  mainnet,
  mantle,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains'

import { xLayer } from './chains'
import { coinbaseWallet, injected, metaMask, walletConnect } from 'wagmi/connectors'
import { mantleSepolia } from './chains/mantleSepolia'
import { isMobile } from '@/helpers/isMobile'

const projectId = 'your project id'

export const chains: [Chain, ...Chain[]] = [
  mainnet,
  sepolia,
  mantle,
  bsc,
  base,
  mantleSepolia,
  avalanche,
  polygon,
  optimism,
  coreDao,
  xLayer,
  arbitrum,
]

export const transports = {
  [mainnet.id]: http('https://ethereum-rpc.publicnode.com'),
  [mantle.id]: http('https://mantle-rpc.publicnode.com'),
  [bsc.id]: http('https://bsc-rpc.publicnode.com'),
  [base.id]: http('https://base.meowrpc.com'),
  [mantleSepolia.id]: http(mantleSepolia.rpcUrls.default.http[0]),
  [arbitrum.id]: http('https://arbitrum.meowrpc.com'),
  [coreDao.id]: http('https://rpc.ankr.com/core'),
  [xLayer.id]: http('https://1rpc.io/oktc'),
  [avalanche.id]: http('https://1rpc.io/avax/c'),
  [polygon.id]: http('https://rpc.ankr.com/polygon'),
  [optimism.id]: http('https://optimism-rpc.publicnode.com'),
  [sepolia.id]: http('https://rpc.testnet.thebinaryholdings.com'),
}

const targetConnector = isMobile() ? injected({ shimDisconnect: true }) : metaMask()

const wagmiConfig = createConfig({
  chains,
  ssr: true,
  transports,
  connectors: [
    coinbaseWallet({
      appName: 'entangle',
    }),
    walletConnect({
      projectId,
    }),
    targetConnector,
    // injected({
    //   target() {
    //     // @ts-ignore
    //     return {
    //       id: 'keplr',
    //       name: 'Keplr Provider',
    //       provider: keplr?.ethereum,
    //     }
    //   },
    // }),
  ],
  multiInjectedProviderDiscovery: true,
})

export { wagmiConfig }
