import mantleIcon from '@/public/assets/icons/networks/mantle.png'
import ethIcon from '@/public/assets/icons/eth-icon_24x24.svg'
import bscIcon from '@/public/chains/rsz_binance.png'
import baseIcon from '@/public/chains/rsz_base.png'
import arbIcon from '@/public/chains/rsz_arbitrum.png'
import coreIcon from '@/public/chains/rsz_core.png'
import xlayerIcon from '@/public/chains/rsz_xlayer.png'
import type { IBridgeParticipantNetwork } from '@/containers/Bridge/bridgeTypes'
import avalancheIcon from '@/public/chains/avalanche.png'
import opIcon from '@/public/chains/op.png'
import polygonIcon from '@/public/chains/polygon.png'
import type { StaticImageData } from 'next/image'

export interface INetwork {
  chainId: number
  chainIdHex: string
  name: string
  nativeCurrency: string
  currency: string
  contractAddress: string
  rpcUrl: string
  icon: StaticImageData
  isEntangle?: boolean
  isHidden?: boolean
  metadata?: {
    cctpDomain?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
  nonEvm?: boolean
}

export const networkConfigsMainnet = {
  Ethereum: {
    chainId: 1,
    chainIdHex: '0x1',
    name: 'Ethereum',
    nativeCurrency: 'ETH',
    currency: 'NGL',
    contractAddress: '0x12652C6d93FDB6F4f37d48A8687783C782BB0d10',
    rpcUrl: 'https://ethereum-rpc.publicnode.com',
    icon: ethIcon,
    metadata: {
      cctpDomain: 0,
    },
  },
  Mantle: {
    chainId: 5000,
    chainIdHex: '0x1388',
    name: 'Mantle',
    nativeCurrency: 'MNT',
    currency: 'NGL',
    contractAddress: '0x8A3ed1F2D15b5015396F494cc1Da977da38A6773',
    rpcUrl: 'https://mantle-rpc.publicnode.com',
    icon: mantleIcon,
  },
  BSC: {
    chainId: 56,
    chainIdHex: '0x38',
    name: 'BSC',
    nativeCurrency: 'BNB',
    currency: 'NGL',
    contractAddress: '0x261F4d0e7EF7F9146C317c918661755Dc686c4CC',
    rpcUrl: 'https://bsc-dataseed.binance.org',
    icon: bscIcon,
  },
  Base: {
    chainId: 8453,
    chainIdHex: '0x2105',
    name: 'Base',
    nativeCurrency: 'ETH',
    currency: 'NGL',
    contractAddress: '0xF9fE981ED5fe7e911a636d861Dfe5C5b7B31073A',
    rpcUrl: 'https://base.llamarpc.com',
    icon: baseIcon,
    metadata: {
      cctpDomain: 6,
    },
  },
  Arbitrum: {
    chainId: 42161,
    chainIdHex: '0xA4B1',
    name: 'Arbitrum',
    nativeCurrency: 'ETH',
    currency: 'NGL',
    contractAddress: '0x3F97f08dDB1664FD0a3Dbb8b965C9bd36d422f9B',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    icon: arbIcon,
    metadata: {
      cctpDomain: 3,
    },
  },
  Avalanche: {
    chainId: 43114,
    chainIdHex: '0xA86A',
    name: 'Avalanche',
    nativeCurrency: 'AVAX',
    currency: 'USDC',
    contractAddress: '0x5425890298aed601595a70ab815c96711a31bc65',
    rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
    icon: avalancheIcon,
    metadata: {
      cctpDomain: 1,
    },
  },
  OP: {
    chainId: 10,
    chainIdHex: '0xA',
    name: 'OP',
    nativeCurrency: 'ETH',
    currency: 'USDC',
    contractAddress: '0x5fd84259d66Cd46123540766Be93DFE6D43130D7',
    rpcUrl: 'https://optimism.llamarpc.com',
    icon: opIcon,
    metadata: {
      cctpDomain: 2,
    },
  },
  Polygon: {
    chainId: 137,
    chainIdHex: '0x89',
    name: 'Polygon',
    nativeCurrency: 'MATIC',
    currency: 'USDC',
    contractAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    rpcUrl: 'https://polygon-rpc.com',
    icon: polygonIcon,
    metadata: {
      cctpDomain: 7,
    },
  },
  CoreDAO: {
    chainId: 1116,
    chainIdHex: '0x45c',
    name: 'CoreDAO',
    nativeCurrency: 'CORE',
    currency: 'NGL',
    contractAddress: '0x3F97f08dDB1664FD0a3Dbb8b965C9bd36d422f9B',
    rpcUrl: 'https://rpc.coredao.org',
    icon: coreIcon,
  },
  XLayer: {
    chainId: 196,
    chainIdHex: '0xc4',
    name: 'XLayer',
    nativeCurrency: 'OKB',
    currency: 'NGL',
    contractAddress: '0x3F97f08dDB1664FD0a3Dbb8b965C9bd36d422f9B',
    rpcUrl: 'https://rpc.xlayer.tech',
    icon: xlayerIcon,
  },
} as Record<string, INetwork>

export const networkConfigs = networkConfigsMainnet

export const differentEnvNetworkChainIds = Object.values(networkConfigs).map(
  ({ chainId }) => chainId
)

export const networkOptions: IBridgeParticipantNetwork[] = Object.values(networkConfigs)
  .filter((item) => !item.isHidden)
  .map(({ name, icon, isEntangle, chainId }: INetwork) => ({
    networkText: name.split(' ')[0],
    networkValue: name,
    networkIcon: icon,
    isEntangle,
    chainId,
  }))

export const chainsRealIdsToInternal: Record<number | string, number> = {
  11100000000000000000: 900,
}

export const nonEVMChains = Object.values(networkConfigs).filter(({ nonEvm }) => !!nonEvm)
export const nonEVMChainIds = nonEVMChains.map(({ chainId }) => chainId)

export const getChainByChainId = (chainId: number | string) => {
  return Object.values(networkConfigs).find(
    (network) =>
      network.chainId == chainId || network.chainId == chainsRealIdsToInternal[chainId]
  )
}

export const getNetworkByChainId = (chainId: number | string) => {
  return networkOptions.find(
    (network) =>
      network.chainId == chainId || network.chainId === chainsRealIdsToInternal[chainId]
  ) as IBridgeParticipantNetwork
}

// this mapping is mostly for understanding what to use - wagmi or web3-solana
export const ChainIdToBlockchainMatch: Record<string, 'EVM' | 'SOL' | 'TRX' | 'NOBL'> = {
  1: 'EVM',
  33133: 'EVM',
  33033: 'EVM',
  56: 'EVM',
  8453: 'EVM',
  5003: 'EVM',
  5000: 'EVM',
  900: 'SOL',
  901: 'SOL',
  11155111: 'EVM',
  421614: 'EVM',
  42161: 'EVM',
  43114: 'EVM', // Avalanche
  43113: 'EVM', // Avalanche Fuji
  10: 'EVM', // OP Mainnet
  420: 'EVM', // OP Goerli
  137: 'EVM', // Polygon PoS
  80001: 'EVM', // Polygon Mumbai
  1116: 'EVM',
  196: 'EVM',
  728126428: 'TRX',
}
