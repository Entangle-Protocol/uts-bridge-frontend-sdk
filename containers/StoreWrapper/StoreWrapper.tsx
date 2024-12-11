'use client'

import type { IState } from '@/core/store'
import { makeStore } from '@/core/store'
import React from 'react'
import { Provider } from 'react-redux'

const StoreWrapper: React.FC<{
  initStoreData: IState
  children: React.ReactNode
}> = ({ initStoreData: initStoreDataProps, children }) => {
  const initStoreData = { ...initStoreDataProps }
  //rehydrateStore
  const store = makeStore(initStoreData)
  return (
    <Provider store={store} stabilityCheck='never'>
      {children}
    </Provider>
  )
}
export default StoreWrapper
