import type { ICoinData } from '../CoinEntity'
import type { DayData } from './CoinRepository.interfaces'
import { toFixedDown } from '@/utils/toFixedDown'

export const PriceAdapter = (data: any): Promise<number> => {
  return data.market_data.current_price.usd
}

export const MarketCapAdapter = (data: any): Promise<number> => {
  return data.market_data.market_cap.usd
}

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const DayAdapter = (data: any): Promise<DayData[]> => {
  const formattedData = data.prices.map((item: any) => {
    const date = new Date(item[0])
    const dayName = weekdays[date.getDay()]
    const truncatedPrice = toFixedDown(Number(item[1]), 2)
    return { name: dayName, value: Number(truncatedPrice) }
  })
  const indexToRemove = formattedData.length - 2
  formattedData.splice(indexToRemove, 1)

  return Promise.resolve(formattedData)
}
export const HourAdapter = (data: any): ICoinData => {
  const newdata = structuredClone(data)
  const currentTimestamp = Date.now()
  const oneHourAgoTimestamp = currentTimestamp - 60 * 60 * 1000
  const twentyFourHoursAgoTimestamp = currentTimestamp - 24 * 60 * 60 * 1000

  const lastHourData = data.prices.filter(
    ([timestamp]: any) => timestamp >= oneHourAgoTimestamp && timestamp <= currentTimestamp
  )
  const lastTwentyFourHoursData = newdata.prices.filter(
    ([timestamp]: any) =>
      timestamp >= twentyFourHoursAgoTimestamp && timestamp <= currentTimestamp
  )

  const resultingHData = lastHourData.map(([timestamp, price]: any) => {
    const timeString = new Date(timestamp).toTimeString()
    const value = toFixedDown(Number(price), 6)
    return { name: timeString.slice(0, 5), value }
  })

  const resulting24HData = lastTwentyFourHoursData.map(([timestamp, price]: any) => {
    const timeString = new Date(timestamp).getHours()
    const value = toFixedDown(Number(price), 6)
    return { name: timeString + ':00', value }
  })

  const [_, firstVal] = data.prices[0]
  const [__, lastVal] = data.prices[data.prices.length - 1]
  const percent = String((((lastVal - firstVal) / firstVal) * 100).toFixed(2)) + '%'
  return { resultingHData, resulting24HData, percent }
}
