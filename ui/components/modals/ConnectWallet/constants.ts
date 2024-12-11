import { isMobile } from '@/helpers/isMobile'

import mmSrc from '@/public/assets/icons/metamask.svg'
import cbSrc from '@/public/assets/icons/coinbase.svg'
import wcSrc from '@/public/assets/icons/walletconnect.svg'

export const WALLETS = [
  {
    title: 'Metamask',
    image: mmSrc,
    connector: isMobile() ? 'injected' : 'metaMaskSDK',
    disabled: false,
  },
  {
    title: 'CoinBase',
    image: cbSrc,
    connector: 'coinbaseWalletSDK',
    disabled: false,
  },
  {
    title: 'WalletConnect',
    image: wcSrc,
    connector: 'walletConnect',
    disabled: false,
  },
]
