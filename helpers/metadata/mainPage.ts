import type { Metadata } from 'next'

export const getMetadata = (): Metadata => {
  return {
    title: 'Bridge',
    keywords: [
      'universal token standard',
      'deploy omnichain assets',
      'omnichain token deployment',
      'cross-chain token transfers',
      'omnichain asset management',
      'secure omnichain token integration',
      'unified token standard',
      'seamless cross-chain deployment',
      'multi-chain asset transfer',
      'omnichain liquidity',
    ],
    description:
      'Launch, scale and upgrade new or existing digital assets to be compatible across all blockchains.\n',
    openGraph: {
      title: 'UTS Bridge',
      description:
        'Launch, scale and upgrade new or existing digital assets to be compatible across all blockchains.\n',
      url: 'URL for UTS',
      siteName: 'Entangle Universal Token Standard',
      images: [
        {
          url: 'Banner required ',
          width: 2048,
          height: 1152,
          alt: 'Universal Token Standard by Entangle',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
}
