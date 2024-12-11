import { NextResponse } from 'next/server'

let cachedUsdRate: number | null = null
let cacheTimestamp: Date | null = null
let cachedChainFrom: string | null = null
const cacheLifetime = 60

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const currentTime = new Date()
  if (cachedUsdRate !== null && cacheTimestamp) {
    const cacheAge = (currentTime.getTime() - cacheTimestamp.getTime()) / 1000
    if (cacheAge < cacheLifetime && searchParams.get('chainFrom') === cachedChainFrom) {
      return NextResponse.json({ usdRate: cachedUsdRate })
    }
  }

  try {
    cachedChainFrom = searchParams.get('chainFrom')
    const response = await fetch(
      `https://pro-api.coingecko.com/api/v3/coins/${cachedChainFrom}`,
      {
        method: 'GET',
        headers: {
          'x-cg-pro-api-key': `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}` as string,
        },
      }
    )

    const fetchedTokenInfo = await response.json()
    const usdRate = fetchedTokenInfo?.market_data?.current_price?.usd

    cachedUsdRate = usdRate
    cacheTimestamp = currentTime

    return NextResponse.json({ fetchedTokenInfo })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error }, { status: 500 })
  }
}
