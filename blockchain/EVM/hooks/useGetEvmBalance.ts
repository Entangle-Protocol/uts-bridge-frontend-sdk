import { useEffect, useState } from 'react'
import { formatEther } from 'viem'
import { useWalletClient } from 'wagmi'
import type { TokenOption } from '@/constants/tokens'
import { BridgeRepository } from '@/core/Bridge/BridgeRepository'

export const useGetEvmBalance = (chainId?: number, tokens: TokenOption[] = []) => {
  const [evmBalance, setEvmBalance] = useState('0.00')
  const { data: signer } = useWalletClient({ chainId })

  useEffect(() => {
    const fetchBalance = async () => {
      const token = tokens.find((token) => token.tokenValue === 'NGL')
      if (!token?.contractAddress || !signer || !chainId) {
        return
      }
      try {
        const balance = await BridgeRepository.getTokenBalance(
          token.contractAddress,
          signer,
          chainId
        )

        const formattedBalance = (+formatEther(balance)).toFixed(2)

        evmBalance !== formattedBalance && setEvmBalance(formattedBalance)
      } catch (error) {
        console.error('useGetEvmBalance', error)
      }
    }

    fetchBalance()
  }, [chainId, evmBalance, signer, tokens])

  return evmBalance
}
