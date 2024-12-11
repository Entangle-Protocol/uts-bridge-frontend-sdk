import { BRIDGE_OPERATIONS_LISTENER } from '@/core/BridgeOperations/queries'
import { useCallback, useMemo, useRef, useState } from 'react'
import type { Subscription } from 'zen-observable-ts'
import { useDeepCompareEffect } from '@/hooks/useDeepCompareEffect'
import { apolloClientCcmIndexer } from '@/core/apollo'
import type { ApolloQueryResult } from '@apollo/client'
import type { TOperation } from '@/containers/Bridge/BridgeSidebar/BridgeOperations'
import type { IState } from '@/core/store'
import { useAppDispatch } from '@/core/store'
import { useSelector } from 'react-redux'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import { differentEnvNetworkChainIds } from '@/constants/networkConfigs'

export interface BridgeOperationsState {
  items: any[]
}

const DEFAULT_STATE: BridgeOperationsState = {
  items: [],
}

export const useBridgeOperations = (address: string | undefined) => {
  const [state, setState] = useState(DEFAULT_STATE)
  const subscription = useRef<Subscription | null>(null)

  const dispatch = useAppDispatch()
  const bridgeOperations = useSelector((state: IState) => state.BridgeEntity.bridgeOperations)
  const currentOps = useMemo(() => {
    if (address) {
      return bridgeOperations[address]
    }
  }, [bridgeOperations, address])
  const handleReset = useCallback(async () => {
    subscription.current?.unsubscribe()
    subscription.current = null
    setState(DEFAULT_STATE)
  }, [])

  useDeepCompareEffect(async () => {
    if (!address) {
      return
    }

    await handleReset()

    subscription.current = apolloClientCcmIndexer
      .subscribe({
        query: BRIDGE_OPERATIONS_LISTENER,
        variables: { address },
      })
      .subscribe({
        next({ data }: ApolloQueryResult<any>) {
          if (data && currentOps) {
            try {
              // first clearing duplicating items from LS
              const allLsOperations = localStorage.getItem('all_bridge_operations')
              const allOperations = allLsOperations ? JSON.parse(allLsOperations) : {}
              Object.keys(allOperations).forEach((key) => {
                allOperations[key] = allOperations[key].filter((item: any) => {
                  !data?.common_bridge_operations.some(
                    (i: TOperation) => i.src_tx_hash === item.src_tx_hash
                  )
                })
              })
              localStorage.setItem('all_bridge_operations', JSON.stringify(allOperations))
            } catch (e) {
              console.error('Error in useBridgeOperations', e)
            }

            const allops = [...data?.common_bridge_operations, ...currentOps]
            const txHashMap: Record<string, boolean> = {}
            dispatch(
              BridgeEntity.actions.setBridgeOperations({
                address,
                operations: allops.reduce((acc, item) => {
                  if (
                    !txHashMap[item.src_tx_hash] &&
                    !differentEnvNetworkChainIds.includes(item.src_chain_id)
                  ) {
                    acc.push(item)
                    txHashMap[item.src_tx_hash] = true
                  }
                  return acc
                }, []),
              })
            )
          }
        },
        error() {
          console.error('Error in useBridgeOperations')
        },
      })
  }, [address])

  const sortedRes = useMemo(() => {
    return (
      currentOps &&
      ([...currentOps]?.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ) ||
        [])
    )
  }, [currentOps])

  return {
    items: sortedRes,
  }
}
