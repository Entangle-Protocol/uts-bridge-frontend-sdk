import { ApolloWrapper } from '@/lib/graphql'
import '@/public/assets/styles/globals.css'
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
