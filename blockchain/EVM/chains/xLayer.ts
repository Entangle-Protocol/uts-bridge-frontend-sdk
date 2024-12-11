import { defineChain } from 'viem'

export const xLayer = defineChain({
  id: 196,
  name: 'X Layer Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'OKB',
    symbol: 'OKB',
  },
  rpcUrls: {
    public: { http: ['https://rpc.xlayer.tech'] },
    default: { http: ['https://rpc.xlayer.tech'] },
  },
  blockExplorers: {
    default: {
      apiUrl: 'https://www.oklink.com/xlayer-api',
      name: 'Xlayer Explorer',
      url: 'https://www.oklink.com/xlayer',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
  },
})
