import React, { useContext, useEffect, useMemo } from 'react'

import { useAccount as useWagmiAccount } from 'wagmi'
import { useBalance } from 'wagmi'
import { isDocumentVisible } from '@/utils/isDocumentVisible'
import { POLLING_INTERVAL } from '@/constants/common'

interface Web3ContextType {
  balance: string | undefined
}

export const Web3Context = React.createContext<Web3ContextType>({
  balance: undefined,
})

export interface Web3ContextProviderProps {
  children: React.ReactNode
}

export const Web3ContextProvider = ({ children }: Web3ContextProviderProps) => {
  const { address } = useWagmiAccount()
  const { data: balance, refetch } = useBalance({
    address,
  })

  useEffect(() => {
    const i = setInterval(() => {
      if (isDocumentVisible()) {
        refetch()
      }
    }, POLLING_INTERVAL)

    return () => clearInterval(i)
  }, [refetch])

  const value = useMemo(
    () => ({
      balance: balance?.formatted,
    }),
    [balance]
  )

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}

export const useWeb3Context = () => useContext(Web3Context)
