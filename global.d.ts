import type { providers } from 'ethers'
import type { WindowProvider } from 'wagmi'

declare global {
  interface Window {
    bitkeep?: {
      ethereum: WindowProvider
    }
    mmDisabled?: providers.ExternalProvider
    phantom?: providers.ExternalProvider
  }

  interface Number {
    noExponents: () => string
  }

  interface String {
    noExponents: () => string
  }
}
