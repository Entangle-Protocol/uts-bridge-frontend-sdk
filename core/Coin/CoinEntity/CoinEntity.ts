import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { DayData } from '../CoinRepository/CoinRepository.interfaces'
import type { GraphData } from './CoinEntity.interfaces'
import { isFulfilledAction, isPendingAction, isRejectedAction } from '../../utils/basicActions'

export interface ICoinEntityCoinObject {
  price: number
  dailyData: DayData[]
  hourlyData: GraphData[]
  twentyFourHdata: GraphData[]
  percent: string
  marketCap: number
  totalSupply: number
}

export interface ICoinEntityState {
  coins: { [coin: string]: ICoinEntityCoinObject }
  isCoinLoading: boolean
}

export const DEFAULT_COIN_ENTITY_STATE: ICoinEntityState = {
  coins: {},
  isCoinLoading: false,
}

export const CoinEntity = createSlice({
  name: 'CoinEntity',
  initialState: DEFAULT_COIN_ENTITY_STATE,
  reducers: {
    savePrice(state, action: PayloadAction<[string, number]>) {
      state.coins[action.payload[0]] = {
        ...state.coins[action.payload[0]],
        price: action.payload[1],
      }
    },
    saveSupply(state, action: PayloadAction<[string, number]>) {
      state.coins[action.payload[0]] = {
        ...state.coins[action.payload[0]],
        totalSupply: action.payload[1],
      }
    },
    saveDailyData(state, action: PayloadAction<[string, DayData[]]>) {
      state.coins[action.payload[0]] = {
        ...state.coins[action.payload[0]],
        dailyData: action.payload[1],
      }
    },
    saveHourData(state, action: PayloadAction<[string, GraphData[]]>) {
      state.coins[action.payload[0]] = {
        ...state.coins[action.payload[0]],
        hourlyData: action.payload[1],
      }
    },
    save24HData(state, action: PayloadAction<[string, GraphData[]]>) {
      state.coins[action.payload[0]] = {
        ...state.coins[action.payload[0]],
        twentyFourHdata: action.payload[1],
      }
    },
    savePercent(state, action: PayloadAction<[string, string]>) {
      state.coins[action.payload[0]] = {
        ...state.coins[action.payload[0]],
        percent: action.payload[1],
      }
    },
    saveMarketCap(state, action: PayloadAction<[string, number]>) {
      state.coins[action.payload[0]] = {
        ...state.coins[action.payload[0]],
        marketCap: action.payload[1],
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPendingAction('CoinInteractor'), (state) => {
      state.isCoinLoading = true
    })
    builder.addMatcher(isRejectedAction('CoinInteractor'), (state) => {
      state.isCoinLoading = false
    })
    builder.addMatcher(isFulfilledAction('CoinInteractor'), (state) => {
      state.isCoinLoading = false
    })
  },
})
