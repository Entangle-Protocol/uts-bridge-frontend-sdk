import { GLOBAL_POLLING_INTERVAL } from '@/constants/common'
import { useCallback, useEffect, useState } from 'react'
import { type Address, erc20Abi, getContract } from 'viem'
import { useWalletClient } from 'wagmi'

let t: NodeJS.Timeout

/**
 * Returns the allowance of the given contractAddress from the ownerAddress,
 * to be spent by the tokenMessenger
 * @param values.contractAddress the given token contract address
 * @param values.ownerAddress the wallet owner's address
 * @param values.tokenMessenger the spender's address that the allowance is granted on
 * @param options.skip whether to skip the initial fetch
 */
const useTokenAllowance = (
  values: {
    contractAddress: string
    tokenMessenger: string
  },
  options: {
    skip?: boolean
  }
) => {
  // debugger
  const { contractAddress, tokenMessenger } = values
  const { data: wallet } = useWalletClient()
  const [allowance, setAllowance] = useState<Record<string, bigint | null>>({})

  const refetch = useCallback(async () => {
    if (!contractAddress || !tokenMessenger || !wallet?.account) {
      return
    }
    try {
      const tokenContract = getContract({
        address: contractAddress as Address,
        abi: erc20Abi,
        client: wallet,
      })
      const res = await tokenContract.read.allowance([
        wallet.account.address,
        tokenMessenger as Address,
      ])

      setAllowance((allowance) => {
        return {
          ...allowance,
          [contractAddress]: res,
        }
      })
    } catch (e) {}
  }, [contractAddress, tokenMessenger, wallet])

  useEffect(() => {
    clearInterval(t)
    if (options.skip || !wallet?.account) {
      return
    }
    refetch()

    t = setInterval(refetch, GLOBAL_POLLING_INTERVAL)

    return () => {
      clearInterval(t)
    }
  }, [options.skip, refetch, wallet?.account])

  return {
    allowance: allowance[contractAddress],
    refetch,
  }
}

export default useTokenAllowance
