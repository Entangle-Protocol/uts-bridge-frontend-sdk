import type { ICoinEntityCoinObject } from '@/core/Coin/CoinEntity'
import { CoinRepository } from '@/core/Coin/CoinRepository'
import type { NextApiRequest } from 'next'

let cachedData: Partial<ICoinEntityCoinObject> | null = null
let cacheTimeStamp: Date = new Date()
const lifeTime = 5

export const dynamic = 'force-dynamic'

export const revalidate = 5

export async function GET(request: NextApiRequest) {
  const { searchParams } = new URL(request.url || '')
  const coin = searchParams.get('coin') || 'entangle'
  const currentDate = new Date()
  if (Math.abs((cacheTimeStamp.getTime() - currentDate.getTime()) / 1000) > lifeTime) {
    cachedData = null
  }
  if (!cachedData) {
    const Repository = CoinRepository

    const price = await Repository.getPrice(coin)
    const dailyData = await Repository.getDayData(coin)
    const marketCap = await Repository.getMarketCap(coin)
    const data = await Repository.getHourData(coin)
    const totalSupply = await Repository.getSupply(coin)
    const hourlyData = data.resultingHData
    const percent = data.percent
    const twentyFourHdata = data.resulting24HData

    cachedData = {
      price,
      totalSupply,
      dailyData,
      hourlyData,
      percent,
      twentyFourHdata,
      marketCap,
    }
    cacheTimeStamp = currentDate
  }

  return Response.json(cachedData)
}
