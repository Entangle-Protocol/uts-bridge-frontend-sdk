import { chainsRealIdsToInternal, networkConfigs } from '@/constants/networkConfigs'
import type { StaticImageData } from 'next/image'

export type TokenName = string

// adding new tokens:
// - add token addresses constants in format {TOKEN_NAME}_ADDRESS_{CHAIN_NAME}
// - add them respectively to each new network in TokenOptions
// - if there are wrapped versions - add these relations to InterchangeableTokens

export enum TokenBridgeProtocol {
  CCM,
  CCTP,
  UTS,
}

export interface TokenOption {
  clusterId?: string
  tokenText: string
  tokenValue: TokenName
  tokenIcon: StaticImageData | null
  // ERC-20 token address or underlying token address (ERC-20) for UTS
  contractAddress: string
  // for internal use. field for detecting tokenName+blockchain pair system-wide. example - TOKEN_BASE_GORPLES, TOKEN_NGL_WNGL
  systemLabel: string
  decimals: number
  protocol: TokenBridgeProtocol
  chainId?: number | string
  metadata?: {
    tokenMessenger?: string
    messageTransmitter?: string
    connectorAddress?: string
  }
  local?: boolean
  verified: boolean
}

export const TOKENS: Record<string, TokenOption> = {
  CONNECTOR_8453_DEMO: {
    tokenText: 'ERC20Mock',
    tokenValue: 'ERC',
    tokenIcon: null,
    contractAddress: '0x9bF48d94a5602EE51145955654376f54A7275B66',
    systemLabel: 'CONNECTOR_8453_DEMO',
    decimals: 12,
    protocol: TokenBridgeProtocol.UTS,
    chainId: networkConfigs.Base.chainId,
    verified: false,
    metadata: { connectorAddress: '0x70AF9e2d376Afab9dE54904AF3b6Fb5d2F7dC7C0' },
  },
  CONNECTOR_421614_DEMO: {
    tokenText: 'ERC20Mock',
    tokenValue: 'ERC',
    tokenIcon: null,
    contractAddress: '0x4e69ec544146d6B07F5D802E1468657663A4841F',
    systemLabel: 'CONNECTOR_421614_DEMO',
    decimals: 18,
    protocol: TokenBridgeProtocol.UTS,
    chainId: networkConfigs.Arbitrum.chainId,
    verified: false,
    metadata: { connectorAddress: '0x006e4Eb4D600817fff20058f1B4aFf8CB1618Df7' },
  },
  TOKEN_137_DEMO: {
    tokenText: 'Demo Existing Token',
    tokenValue: 'EXSTDEMO',
    tokenIcon: null,
    contractAddress: '0xc6bf520ab6D6028e6416Afa0Df8a1Ad2d8F825c0',
    systemLabel: 'TOKEN_137_DEMO',
    decimals: 18,
    protocol: TokenBridgeProtocol.UTS,
    chainId: networkConfigs.Polygon.chainId,
    verified: false,
  },
  TOKEN_8453_DEMO: {
    tokenText: 'Demo Existing Token',
    tokenValue: 'EXSTDEMO',
    tokenIcon: null,
    contractAddress: '0xc6bf520ab6D6028e6416Afa0Df8a1Ad2d8F825c0',
    systemLabel: 'TOKEN_8453_DEMO',
    decimals: 18,
    protocol: TokenBridgeProtocol.UTS,
    chainId: networkConfigs.Base.chainId,
    verified: false,
  },
}

export const InterchangeableTokens: Record<string, string[]> = {
  NGL: ['WNGL', 'NGL'],
  WNGL: ['NGL', 'WNGL'],
  GORPLES: ['GORPLE'],
  GORPLE: ['GORPLES'],
}

// when we have only name from server, e.g. 'USDC', 'NGL', etc. - this function helps to get full token object
export const getTokenByNameAndChainId = (
  chainId: number | string,
  token: string,
  allTokenOptions: Record<string, TokenOption[]>
) => {
  const localTokenName = token
  const interchangeableLocalTokens = InterchangeableTokens[localTokenName]
  const chain = chainsRealIdsToInternal[chainId] || chainId

  return allTokenOptions[chain]?.find((token) => {
    return (
      token.tokenValue === localTokenName ||
      token.tokenText === localTokenName ||
      interchangeableLocalTokens?.includes(token.tokenValue)
    )
  })
}

export const trimmedDecimals: Record<string, number> = {
  GORPLES: 2,
  NGL: 2,
  WNGL: 2,
}

export const TokenCoinGeckoIds: Record<string, string> = {
  GORPLES: 'borpatoken',
  NGL: 'entangle',
  WNGL: 'entangle',
  USDC: 'usd-coin',
  base: 'base',
  bsc: 'binancecoin',
  BNB: 'binancecoin',
  ethereum: 'ethereum',
  mantle: 'mantle',
  MNT: 'mantle',
  arbitrum: 'arbitrum',
  avalanche: 'avalanche-2',
  AVAX: 'avalanche-2',
  op: 'optimism',
  polygon: 'polygon-ecosystem-token',
  coredao: 'coredao',
  CORE: 'coredao',
  OKB: 'okb',
  tron: 'tron',
  ETH: 'ethereum',
  MATIC: 'polygon-ecosystem-token',
}
