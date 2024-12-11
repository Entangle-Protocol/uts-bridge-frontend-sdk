import { ApolloWrapper } from '@/lib/graphql'
import '@/public/assets/styles/globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from './Providers'
import { ConnectWallet } from '@/containers/ConnectWallet'
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'
import { wagmiConfig } from '@/blockchain/EVM/provider'

import { initStoreData } from '@/core/utils/initStore'
import Header from '@/containers/Header'
import fontClasses from '@/public/assets/fonts/fonts'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Entangle Explorer',
  keywords: [
    'Entangle',
    'Blockchain',
    'Scanner',
    'Explorer',
    'Transactions',
    'Validators',
    'Analytics',
  ],
  description:
    'Entangle Explorer is a hub for users to delegate and bridge tokens, as well as search, visualize, and analyze all activity within the Entangle Ecosystem, including transactions, addresses, validators, cross-chain messages and more.\n' +
    'Keywords: Entangle, Blockchain, Scanner, Explorer, Transactions, Validators, Analytics\n',
  openGraph: {
    title: 'Entangle Explorer',
    description:
      'Entangle Explorer is a hub for users to delegate and bridge tokens, as well as search, visualize, and analyze all activity within the Entangle Ecosystem, including transactions, addresses, validators, cross-chain messages and more.\n' +
      'Keywords: Entangle, Blockchain, Scanner, Explorer, Transactions, Validators, Analytics\n',
    url: 'https://explorer.entangle.fi',
    siteName: 'Entangle Explorer',
    images: [
      {
        url: 'https://explorer.entangle.fi/assets/banners/Explorer.jpg', // Must be an absolute URL
        width: 2048,
        height: 1152,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}): Promise<JSX.Element> {
  const initData = await initStoreData()

  const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))

  return (
    <html className={`${fontClasses} root`} lang='en'>
      <head>
        <Script
          src='https://cdn.jsdelivr.net/npm/merkletreejs@latest/merkletree.js'
          strategy='beforeInteractive'
        />
      </head>
      <link rel='mask-icon' href='../public/favicon.ico' />
      <body id='root'>
        <ApolloWrapper>
          <Providers initData={initData} initWalletData={initialState}>
            <div className='layout'>
              <Header />
              <div className='layout__container'>{children}</div>
              <ConnectWallet />
            </div>
          </Providers>
        </ApolloWrapper>
      </body>
    </html>
  )
}
