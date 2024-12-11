import type { ICoinData, ICoinEntityCoinObject } from '../CoinEntity'

export interface ICoinRepository {
  getPrice(coin: string): Promise<number>
  getSupply(coin: string): Promise<number>
  getMarketCap(coin: string): Promise<number>
  getInitData(coin: string): Promise<Partial<ICoinEntityCoinObject>>
  getDayData(coin: string): Promise<DayData[]>
  getHourData(coin: string): Promise<ICoinData>
}

export interface DayData {
  day: string
  price: number
}
