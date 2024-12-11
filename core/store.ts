import type {
  EnhancedStore,
  StoreEnhancer,
  ThunkDispatch,
  Tuple,
  UnknownAction,
} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { AppEntity } from './App/AppEntity'
import { BridgeEntity } from './Bridge/BridgeEntity'
import { BridgeInteractor } from './Bridge/BridgeInteractor'
import { CoinEntity } from './Coin/CoinEntity'
import { CoinInteractor } from './Coin/CoinInteractor'
import { useCallback } from 'react'
import { AppInteractor } from '@/core/App/AppEntity/AppInteractor'
import { accountGraphQlApi } from '@/core/Account/AccountGraphQlApi'
import { bridgeOperationsApi } from '@/core/BridgeOperations/BridgeOperationsApi'

type TMakeStoreFn = (preloadedState?: IState | undefined) => EnhancedStore<
  IState,
  UnknownAction,
  Tuple<
    [
      StoreEnhancer<{
        dispatch: ThunkDispatch<IState, undefined, UnknownAction>
      }>,
      StoreEnhancer,
    ]
  >
>

export const makeStore: TMakeStoreFn = (preloadedState) => {
  return configureStore({
    reducer: {
      [accountGraphQlApi.reducerPath]: accountGraphQlApi.reducer,
      [bridgeOperationsApi.reducerPath]: bridgeOperationsApi.reducer,
      // @ts-ignore
      AppEntity: AppEntity.reducer,
      BridgeEntity: BridgeEntity.reducer,
      CoinEntity: CoinEntity.reducer,
      // @ts-ignore
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(accountGraphQlApi.middleware)
        .concat(bridgeOperationsApi.middleware),
  })
}
export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type IStore = ReturnType<ReturnType<typeof makeStore>['getState']>

export interface IState {
  AppEntity: ReturnType<typeof AppEntity.reducer>
  BridgeEntity: ReturnType<typeof BridgeEntity.reducer>
  CoinEntity: ReturnType<typeof CoinEntity.reducer>
}

export const actions = {
  App: AppEntity.actions,
  Bridge: BridgeEntity.actions,
  Coin: CoinEntity.actions,
}

export const asyncActions = {
  App: AppInteractor,
  Bridge: BridgeInteractor,
  Coin: CoinInteractor,
}

type TActions = typeof actions
type TAsyncActions = typeof asyncActions

export const useStore = <T>(
  selector: (store: IStore) => T
): { store: T; actions: TActions; asyncActions: TAsyncActions } => {
  const memoedSelector = useCallback(selector, [])
  return {
    actions,
    asyncActions,
    store: useSelector(memoedSelector),
  }
}
