import { isEvmHash } from '@/core/utils/isEvmHash'

export const explorersOrigins: Record<number | string, string> = {
  97: `https://testnet.bscscan.com`,
  43113: `https://testnet.snowtrace.io`,
  11155111: `https://sepolia.etherscan.io`,
  11155420: `https://sepolia-optimism.etherscan.io`,
  80002: `https://www.oklink.com/amoy`,
  33033: `https://explorer.entangle.fi`,
  1: `https://etherscan.io`,
  56: `https://bscscan.com`,
  43114: `https://subnets.avax.network/c-chain`,
  250: `https://ftmscan.com`,
  10: `https://optimistic.etherscan.io`,
  42161: `https://arbiscan.io`,
  137: `https://polygonscan.com`,
  5000: `https://explorer.mantle.xyz`,
  59140: `https://lineascan.build`,
  195: `https://www.oklink.com/xlayer`,
  41: `https://explorer.telos.net`,
  59901: `https://explorer.metis.io`,
  8453: `https://basescan.org`,
  // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
  11100000000000000501: `https://explorer.solana.com`,
  900: 'https://explorer.solana.com',
  1116: 'https://scan.coredao.org',
  196: 'https://www.okx.com/ru/web3/explorer/xlayer',
  728126428: 'https://tronscan.org',
}

export const explorersGasTrackers: Record<number, string> = {
  97: `https://bscscan.com/gastracker`,
  43113: `https://snowtrace.io/gastracker`,
  11155111: `https://etherscan.io/gastracker`,
  11155420: `https://etherscan.io/gastracker`,
  80002: `https://www.oklink.com/amoy`,
  33033: `https://explorer.entangle.fi`,
  1: `https://etherscan.io/gastracker`,
  56: `https://bscscan.com/gastracker`,
  43114: `https://snowtrace.io/gastracker`,
  250: `https://ftmscan.com/gastracker`,
  10: `https://tokentool.bitbond.com/gas-price/optimism`,
  42161: `https://tokentool.bitbond.com/gas-price/arbitrum`,
  137: `https://polygonscan.com/gastracker`,
  5000: `https://explorer.mantle.xyz/stats`,
  195: `https://www.oklink.com/xlayer/gas-price`,
  41: `https://explorer.telos.net`,
  59901: `https://explorer.metis.io/gastracker`,
  8453: `https://tokentool.bitbond.com/gas-price/base`,
  // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
  11100000000000000501: `https://explorer.solana.com`,
  900: 'https://explorer.solana.com',
  1116: 'https://scan.coredao.org',
  196: 'https://www.oklink.com/xlayer/gas-price',
}

const txSearch = (chainId: number | string) => {
  const exceptions: Record<number | string, string> = {
    33033: 'transactions',
    41: 'transaction',
    728126428: '#/transaction',
  }
  const txPath = exceptions[chainId] || 'tx'
  return txPath
}

const addressSearch = (chainId: number | string) => {
  const exceptions: Record<number | string, string> = {
    33033: 'address',
    41: 'account',
    728126428: '#/address',
  }
  const addressPath = exceptions[chainId] || 'address'
  return addressPath
}

const blockSearch = (chainId: number | string) => {
  const exceptions: Record<number | string, string> = {
    33033: 'blocks',
    41: 'block',
    59901: 'batch',
    728126428: '#/block',
  }
  const blockPath = exceptions[chainId] || 'block'
  return blockPath
}

type TSearch = 'tx' | 'address' | 'block'

export const getExplorerSearchLink = (
  hash: string,
  chainId: number | string,
  search: TSearch
) => {
  const hashExeptions: Record<number | string, string> = {
    33033: (() => {
      let res = hash
      if (isEvmHash(hash)) {
        res = hash.slice(2)
      }
      res = res.toUpperCase()
      return res
    })(),
  }

  const searchPath = {
    tx: txSearch(chainId),
    address: addressSearch(chainId),
    block: blockSearch(chainId),
  }
  return `${explorersOrigins[chainId]}/${searchPath[search]}/${hash}`
}

export const goToExplorerSearchLink = (hash: string, search: TSearch, chain_id?: number) => {
  if (typeof chain_id !== 'undefined') {
    window.open(getExplorerSearchLink(hash, Number(chain_id), search), '_blank')
  } else {
    window.open(`/transactions/${hash}`, '_blank')
  }
}
