import { useChainId, useWalletClient } from 'wagmi'
import { useAppDispatch } from '@/core/store'
import { useEffect } from 'react'
import type { IState } from '@/core/store'
import { isDocumentVisible } from '@/utils/isDocumentVisible'
import { POLLING_INTERVAL } from '@/constants/common'
import { BridgeInteractor } from '@/core/Bridge/BridgeInteractor'
import { useSelector } from 'react-redux'
import { nonEVMChainIds } from '@/constants/networkConfigs'
import type { TokenOption } from '@/constants/tokens'

let i: NodeJS.Timeout

const useBridgeBalance = (
  address: string | undefined,
  chainId: number,
  allTokensByChainId: Record<string, TokenOption[]>,
  destinationAddress?: string
) => {
  const dispatch = useAppDispatch()
  const walletChainId = useChainId()
  const chains = useSelector((state: IState) => state.BridgeEntity.chains)
  const { data: signer } = useWalletClient()
  const { data: signerTo } = useWalletClient({ chainId: chains.to })

  const getTokenBalance = async () => {
    try {
      const isNonEvmChainId = nonEVMChainIds.includes(chainId)
      if (!address || ((!signer || chainId !== walletChainId) && !isNonEvmChainId)) {
        return
      }
      dispatch(
        BridgeInteractor.getBalances({
          address,
          chainId,
          tokens: allTokensByChainId[chainId],
        })
      )
      if (!signerTo) {
        return
      }
      dispatch(
        BridgeInteractor.getBalances({
          address: destinationAddress || address || '',
          chainId: chains.to,
          tokens: allTokensByChainId[chains.to],
        })
      )
    } catch (error) {
      console.error('get Token Balance', error)
    }
  }

  useEffect(() => {
    if (!address || !chainId || !signer) {
      return
    }
    clearInterval(i)
    getTokenBalance().then()
    i = setInterval(() => {
      if (!isDocumentVisible()) {
        return
      }

      getTokenBalance().then()
    }, POLLING_INTERVAL)

    return () => {
      clearInterval(i)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, walletChainId, chainId, signer, signerTo, destinationAddress])
}

export default useBridgeBalance
