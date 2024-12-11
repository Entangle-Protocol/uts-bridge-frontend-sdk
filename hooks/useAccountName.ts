import { useGetAccountNameQuery } from '@/core/Account/AccountGraphQlApi'
import { getNetworkName } from '@/ui/components/Account/Account.helpers'
import { useCallback } from 'react'

const useAccountName = (addresses: (string | undefined)[], chainId: number) => {
  const [address] = addresses
  const { data: evmAccountData, refetch: refetchEvmAccountData } = useGetAccountNameQuery({
    address: address || '',
    network: getNetworkName(chainId) ? getNetworkName(chainId)!.toLowerCase() : '',
  })

  const refetchAccountName = useCallback(async () => {
    await refetchEvmAccountData()
  }, [refetchEvmAccountData])

  return {
    evmAccountData,
    refetchAccountName,
  }
}

export default useAccountName
