import { createAsyncThunk } from '@reduxjs/toolkit'
import { CoinEntity } from '../CoinEntity'
import type { Thunk } from '../../types/interactor'
import type { ICoinRepository } from '../CoinRepository'
import { CoinRepository } from '../CoinRepository'

export interface ICoinInteractor {
  getPrice: Thunk<string, void>
  getDayData: Thunk<string, void>
  getInitData: Thunk<string, void>
  getHourData: Thunk<string, void>
  getMarketCap: Thunk<string, void>
  getSupply: Thunk<string, void>
}

export const createCoinInteractor = (
  Repository: ICoinRepository,
  Entity: typeof CoinEntity
): ICoinInteractor => ({
  getPrice: createAsyncThunk('CoinInteractor/getPrice', async (coin, { dispatch }) => {
    const price = await Repository.getPrice(coin)
    if (price) {
      dispatch(Entity.actions.savePrice([coin, price]))
    }
  }),
  getMarketCap: createAsyncThunk('CoinInteractor/getMarketCap', async (coin, { dispatch }) => {
    dispatch(Entity.actions.saveMarketCap([coin, await Repository.getMarketCap(coin)]))
  }),
  getSupply: createAsyncThunk('CoinInteractor/getSupply', async (coin, { dispatch }) => {
    const data = await Repository.getSupply(coin)
    dispatch(Entity.actions.saveSupply([coin, data]))
  }),
  getDayData: createAsyncThunk('CoinInteractor/getDayData', async (coin, { dispatch }) => {
    dispatch(Entity.actions.saveDailyData([coin, await Repository.getDayData(coin)]))
  }),
  getInitData: createAsyncThunk('CoinInteractor/getInitData', async (coin, { dispatch }) => {
    const { price, dailyData, hourlyData, totalSupply, percent, twentyFourHdata, marketCap } =
      await Repository.getInitData(coin)
    if (price) {
      dispatch(Entity.actions.savePrice([coin, price]))
    }
    if (totalSupply) {
      dispatch(Entity.actions.saveSupply([coin, totalSupply]))
    }
    if (dailyData) {
      dispatch(Entity.actions.saveDailyData([coin, dailyData]))
    }
    if (hourlyData) {
      dispatch(Entity.actions.saveHourData([coin, hourlyData]))
    }
    if (twentyFourHdata) {
      dispatch(Entity.actions.save24HData([coin, twentyFourHdata]))
    }
    if (percent) {
      dispatch(Entity.actions.savePercent([coin, percent]))
    }
    if (marketCap) {
      dispatch(Entity.actions.saveMarketCap([coin, marketCap]))
    }
  }),
  getHourData: createAsyncThunk('CoinInteractor/getHourData', async (coin, { dispatch }) => {
    const data = await Repository.getHourData(coin)
    dispatch(Entity.actions.saveHourData([coin, data.resultingHData]))
    dispatch(Entity.actions.save24HData([coin, data.resulting24HData]))
    dispatch(Entity.actions.savePercent([coin, data.percent]))
  }),
})

export const CoinInteractor = createCoinInteractor(CoinRepository, CoinEntity)
