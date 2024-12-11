import { useEffect, useState } from 'react'
import type { Address, WalletClient } from 'viem'
import { getContract } from 'viem'
import { UTSBaseAbi } from '@/blockchain/EVM/abi/UTSBase'
import type { IChainState } from '@/core/Bridge/BridgeEntity'
import { TokenCoinGeckoIds } from '@/constants/tokens'

interface UseFetchGasAndPaymentAmountProps {
  signer: WalletClient | undefined
  address: string | undefined
  chains: IChainState
  chainTo: string | undefined
  chainFrom: string | undefined
}

const normalizeChainFrom = (chainFrom: string | undefined): string | undefined => {
  if (!chainFrom) {
    return undefined
  }
  switch (chainFrom) {
    case 'op':
    case 'base':
    case 'arbitrum':
      return 'ethereum'
    default:
      return chainFrom
  }
}

export const useFetchGasAndPaymentAmount = ({
  signer,
  address,
  chains,
  chainTo,
  chainFrom,
}: UseFetchGasAndPaymentAmountProps) => {
  const normalizedChainFrom = normalizeChainFrom(chainFrom)
  const [UTSFeeRate, setUTSFeeRate] = useState<number | undefined>(undefined)
  const getUsdRate = async () => {
    if (!chainTo || !chainFrom || !normalizedChainFrom) {
      return 0
    }
    try {
      const response = await fetch(
        `/api/token-usd-rate?chainFrom=${TokenCoinGeckoIds[normalizedChainFrom]}`,
        { method: 'GET' }
      )
      const { usdRate } = await response.json()
      return usdRate as number
    } catch (error) {
      console.error('Error fetching USD rate:', error)
      return 0
    }
  }

  useEffect(() => {
    const fetchUTSFeeRate = async () => {
      if (!signer || !address || !Boolean(chains.to) || !Boolean(chains.from)) {
        return
      }
      const isValidUTSTokenResponse = await fetch(
        `/api/validate-token-address?token-address=${address}&chain-id=${chains.from}`
      )
      const data = await isValidUTSTokenResponse.json()
      if (data.isETS) {
        try {
          const utsBaseContract = getContract({
            address: address as Address,
            abi: UTSBaseAbi,
            client: signer,
          })

          const [_, estimatedGasLimit] = await utsBaseContract.read.estimateBridgeFee([
            BigInt(chains.to),
            BigInt(0),
            0,
            '0x',
          ])
          const [estimatedPaymentAmount] = await utsBaseContract.read.estimateBridgeFee([
            BigInt(chains.to),
            estimatedGasLimit,
            0,
            '0x',
          ])
          const res = Number(estimatedPaymentAmount)
          const usdRate = await getUsdRate()
          if (res && usdRate) {
            setUTSFeeRate((res / 10 ** 18) * usdRate)
          }
        } catch (error) {
          console.error('Error fetching UTS fee rate:', error)
        }
      }
    }
    fetchUTSFeeRate()
  }, [signer, address, chains, chainFrom, chainTo, getUsdRate])
  return { UTSFeeRate }
}
