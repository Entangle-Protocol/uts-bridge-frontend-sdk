import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { IAppEntityState } from './AppEntity.interfaces'

export const DEFAULT_APP_ENTITY_STATE: IAppEntityState = {
  appGlobalConfig: {},
  isLoadingAppGlobalConfig: true,
}

const initialState: IAppEntityState = DEFAULT_APP_ENTITY_STATE

export const AppEntity = createSlice({
  name: 'AppEntity',
  initialState: DEFAULT_APP_ENTITY_STATE,
  reducers: {
    setWalletConnectChainId(state = initialState, action: PayloadAction<number | undefined>) {
      state.walletConnectChainId = action.payload
    },
    setIsLoadingAppGlobalConfig(state, action: PayloadAction<boolean>) {
      state.isLoadingAppGlobalConfig = action.payload
    },
  },
})
