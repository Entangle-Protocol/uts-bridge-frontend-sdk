'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import { wagmiConfig } from './provider'
import { Web3ContextProvider } from '@/providers/Web3Context/Web3Context'
interface EvmManagerProps {
  children: ReactNode
  initialState?: State
}
const queryClient = new QueryClient()

function EvmManager({ children, initialState }: EvmManagerProps) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <Web3ContextProvider>{children}</Web3ContextProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default EvmManager
