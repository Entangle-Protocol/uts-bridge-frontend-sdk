interface IAppEntityState {
  walletConnectChainId?: number
  appGlobalConfig: Record<string, any>
  isLoadingAppGlobalConfig: boolean
}

export type { IAppEntityState }
