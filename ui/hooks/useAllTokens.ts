import { useMemo } from 'react'
import type { TokenOption } from '@/constants/tokens'
import { TOKENS } from '@/constants/tokens'
import { sortTokensByChainId } from '@/helpers/sortTokensByChainId'

export const useAllTokens = () => {
  const localTokensFormatted: Record<string, TokenOption> = useMemo(() => {
    return Object.values(TOKENS).reduce(
      (acc: Record<string, TokenOption>, token: TokenOption) => {
        acc[token.systemLabel] = { ...token, local: true }
        return acc
      },
      {} as Record<string, TokenOption>
    )
  }, [])
  const allTokensObj: Record<string, TokenOption> = useMemo(() => {
    const mergedTokens = { ...localTokensFormatted }

    return { ...mergedTokens }
  }, [localTokensFormatted])
  const { allTokensByChainId, allTokensArr } = useMemo(() => {
    const allTokensArr = Object.values(allTokensObj)

    const allTokensCopy = { ...allTokensObj }

    const allTokensByChainId = sortTokensByChainId(allTokensCopy)

    return { allTokensByChainId, allTokensArr }
  }, [allTokensObj])

  return {
    allTokensObj,
    allTokensArr,
    allTokensByChainId,
  }
}
