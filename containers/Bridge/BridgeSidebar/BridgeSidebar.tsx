import { memo, useEffect, useMemo, useState } from 'react'

import classes from './BridgeSidebar.module.scss'
import { BridgeCurrentTransaction } from '@/containers/Bridge/BridgeCurrentTransaction/BridgeCurrentTransaction'
import type { EBridgeStatus } from '@/containers/Bridge/bridgeTypes'
import { useAppDispatch } from '@/core/store'
import { Tabs } from '@/ui/components/Tabs'
import { BridgeOperations } from '@/containers/Bridge/BridgeSidebar/BridgeOperations'
import { useBridgeOperations } from '@/core/BridgeOperations/hooks/useBridgeOperations'
import { BridgeEntity } from '@/core/Bridge/BridgeEntity'
import useBridgeWallet from '@/hooks/useBridgeWallet'

export interface BridgeSidebarProps {
  status: EBridgeStatus
  amount: string | undefined
}

const getTabs = (txs: number | string | undefined) => [
  {
    value: '1',
    label: 'Current',
  },
  {
    value: '2',
    label: 'All Txs',
    amount: txs,
  },
]

export const BridgeSidebar = memo(({ status, amount }: BridgeSidebarProps) => {
  const dispatch = useAppDispatch()
  const [currentTab, setCurrentTab] = useState('1')

  const { addressFrom } = useBridgeWallet()

  const { items } = useBridgeOperations(addressFrom)
  useEffect(() => {
    try {
      const allLSOperations = localStorage.getItem('all_bridge_operations')
      const parsed = JSON.parse(allLSOperations || '{}')
      Object.keys(parsed).forEach((key) => {
        dispatch(
          BridgeEntity.actions.setBridgeOperations({ address: key, operations: parsed[key] })
        )
      })
    } catch (e) {
      console.error('Error on load all bridge operations from local storage', e)
    }
    // loading from ls only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tabs = useMemo(
    () => getTabs(addressFrom && items?.length),
    [addressFrom, items?.length]
  )

  return (
    <div className={classes.root}>
      <Tabs className={classes.tabs} tabs={tabs} value={currentTab} onChange={setCurrentTab} />
      {currentTab === '1' && <BridgeCurrentTransaction status={status} amount={amount} />}
      {currentTab === '2' && (
        <BridgeOperations
          switchTab={() => setCurrentTab('1')}
          operations={addressFrom ? items : undefined}
        />
      )}
    </div>
  )
})

BridgeSidebar.displayName = 'BridgeSidebar'
