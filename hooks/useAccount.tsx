'use client'
import { useCallback, useEffect, useState } from 'react'
import { useAccount as useWagmiAccount, useConnect, useDisconnect } from 'wagmi'

import { useAppDispatch, useStore } from '@/core/store'
import { useRouter } from 'next/navigation'

import { IS_ETS_DOMAIN } from '@/constants/common'

const useAccount = () => {
  const { address: wagmiAddress, chainId, isConnected, status } = useWagmiAccount()
  const [address, setAddress] = useState<`0x${string}` | undefined>(undefined)

  const dispatch = useAppDispatch()
  const {
    actions: {
      App: { setWalletConnectChainId },
    },
  } = useStore((store) => ({
    App: store.AppEntity,
  }))

  const { disconnect } = useDisconnect()

  const { connect, connectors } = useConnect()

  const { push } = useRouter()

  const walletConnect = useCallback(
    async (connector: string, chainId?: number) => {
      try {
        if (connector === 'injected' && !window.ethereum) {
          return push(`https://metamask.app.link/dapp/${window.location.hostname}`)
        }
        const findedConnector = connectors.find((_connector) => _connector.id === connector)
        if (!findedConnector) {
          console.error('connector not found')
          return
        }
        connect({
          chainId: IS_ETS_DOMAIN ? undefined : chainId,
          connector: findedConnector,
        })
      } catch (error) {
        console.error('walletConnect error', error)
      } finally {
        dispatch(setWalletConnectChainId())
      }
    },
    [connectors, connect, push, dispatch, setWalletConnectChainId]
  )

  useEffect(() => {
    if (!isConnected) {
      return setAddress(undefined)
    }
    setAddress(wagmiAddress)
  }, [wagmiAddress, isConnected])

  return {
    address,
    disconnect,
    // balance: balance?.formatted,
    walletConnect,
    chainId,
    status,
  }
}

export default useAccount
