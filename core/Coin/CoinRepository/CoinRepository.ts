import {
  DayAdapter,
  HourAdapter,
  MarketCapAdapter,
  PriceAdapter,
} from './CoinRepository.adapters'
import type { ICoinRepository } from './CoinRepository.interfaces'
import { COIN_URL_PREFIX } from '@/constants/coin'
import { PUBLIC_MAIN_HOST } from '@/core/url'

const coinMapping: Record<string, string> = {
  usdc: 'usd-coin',
}

export const CoinRepository: ICoinRepository = {
  getPrice: async (coin: string | undefined) => {
    const findedToken = coinMapping[coin || ''] || coin

    if (!findedToken) {
      return 0
    }

    try {
      const response = await fetch(`${COIN_URL_PREFIX}/${findedToken}`, {
        method: 'GET',
        headers: {
          'x-cg-pro-api-key': `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`,
        },
      })
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await PriceAdapter(await response.json())
      return data
    } catch (error) {
      throw new Error('Error while fetching price')
    }
  },
  getSupply: async (coin) => {
    try {
      const response = await fetch(`${COIN_URL_PREFIX}/${coin}/`, {
        method: 'GET',
        headers: {
          'x-cg-pro-api-key': `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`,
        },
      })
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      return Number(data?.market_data?.max_supply) || 0
    } catch (error) {
      throw new Error('Error while fetching market cap')
    }
  },
  getMarketCap: async (coin) => {
    try {
      const response = await fetch(`${COIN_URL_PREFIX}/${coinMapping[coin] || coin}`, {
        method: 'GET',
        headers: {
          'x-cg-pro-api-key': `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`,
        },
      })
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await MarketCapAdapter(await response.json())
      return data
    } catch (error) {
      throw new Error('Error while fetching market cap')
    }
  },
  getInitData: async (coin) => {
    const data = await fetch(`${PUBLIC_MAIN_HOST}/api/coins?coin=${coin}`, {
      next: {
        tags: ['coinsStore'],
        revalidate: 10,
      },
    })
      .then((r) => {
        return r.json()
      })
      .catch((e) => {
        console.error('error13', e)
        throw new Error(e)
      })
    const { price, dailyData, hourlyData, percent, twentyFourHdata, marketCap, totalSupply } =
      data

    return {
      price,
      dailyData,
      hourlyData,
      totalSupply,
      percent,
      twentyFourHdata,
      marketCap,
    }
  },
  getDayData: async (coin) => {
    try {
      const response = await fetch(
        `${COIN_URL_PREFIX}/${coin}/market_chart?vs_currency=usd&days=7&interval=daily`,
        {
          method: 'GET',
          headers: {
            'x-cg-pro-api-key': `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await DayAdapter(await response.json())
      return data
    } catch (error) {
      throw new Error('Error while fetching price')
    }
  },
  getHourData: async (coin) => {
    try {
      const response = await fetch(
        `${COIN_URL_PREFIX}/${coin}/market_chart?vs_currency=usd&days=1`,
        {
          method: 'GET',
          headers: {
            'x-cg-pro-api-key': `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`,
          },
        }
      )
      const data = await response.json()
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      return HourAdapter(data)
    } catch (error) {
      throw new Error('Error while fetching price data')
    }
  },
}
