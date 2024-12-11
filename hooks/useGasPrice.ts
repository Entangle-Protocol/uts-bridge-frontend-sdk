import { useCallback, useEffect, useState } from 'react'
import { getGasPrice } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { wagmiConfig as config } from '@/blockchain/EVM/provider'

export type TGasFee = {
  calcFee: number
  formattedFee: string
  formattedFeeWithSymbol: string
}

const useGasPrice = (skip?: boolean) => {
  const [gasPrice, setGasPrice] = useState<bigint | number>(BigInt(0))
  const { chain } = useAccount()

  const receiveGasEVM = async () => {
    try {
      //@ts-ignore
      const _gasPrice = await getGasPrice(config, { chainId: chain?.id })
      setGasPrice(_gasPrice)
    } catch (error) {
      console.error(error)
    }
  }

  const calculateGasFee = useCallback(
    (fee: bigint, customGasPrice?: bigint, fixed?: number) => {
      const selectedGasPrice = Number(customGasPrice) || Number(gasPrice)
      const numberFee = Number(fee)

      const calcFee = numberFee * selectedGasPrice
      // const formattedFee = fixed
      //   ? (+formatUnits(BigInt(calcFee), Number(chain?.nativeCurrency.decimals))).toFixed(
      //       fixed
      //     )
      //   : formatUnits(BigInt(calcFee), Number(chain?.nativeCurrency.decimals))
      const formattedFee = '0.0001'
      const formattedFeeWithSymbol = `${formattedFee} NGL`
      return {
        calcFee,
        formattedFee,
        formattedFeeWithSymbol,
      } as TGasFee
    },
    [gasPrice, chain]
  )

  useEffect(() => {
    if (chain && !skip) {
      receiveGasEVM()
    }
  }, [chain, skip])

  return {
    gasPrice,
    formattedGasPrice: calculateGasFee(BigInt(1)),
    calculateGasFee,
  }
}

export default useGasPrice
