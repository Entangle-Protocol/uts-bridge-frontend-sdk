import { isMobile } from './isMobile'

export const isPhantomMobile =
  typeof window !== 'undefined' && window?.phantom?.solana?.isPhantom && isMobile()
