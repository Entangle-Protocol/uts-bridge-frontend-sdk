import type { IState } from '../store'
import { DEFAULT_COIN_ENTITY_STATE } from '../Coin/CoinEntity'
import { DEFAULT_APP_ENTITY_STATE } from '@/core/App/AppEntity'
import { DEFAULT_BRIDGE_ENTITY_STATE } from '@/core/Bridge/BridgeEntity'

export async function initStoreData(): Promise<IState> {
  'use server'
  return {
    AppEntity: {
      ...DEFAULT_APP_ENTITY_STATE,
      appGlobalConfig: {},
    },
    BridgeEntity: DEFAULT_BRIDGE_ENTITY_STATE,

    CoinEntity: {
      ...DEFAULT_COIN_ENTITY_STATE,
      coins: {
        entangle: {
          price: 0,
          dailyData: [],
          hourlyData: [],
          percent: '',
          twentyFourHdata: [],
          marketCap: 0,
          totalSupply: 0,
        },
      },
    },
  }
}
