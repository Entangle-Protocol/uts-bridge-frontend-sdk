import type { TokenOption } from '@/constants/tokens'

// TokenDict
export const sortTokensByChainId = (tokens: Record<string, TokenOption>) =>
  Object.values(tokens).reduce(
    (acc, token) => {
      if (token.chainId) {
        if (!acc[token.chainId]) {
          acc[token.chainId] = []
        }
        acc[token.chainId].push(token)
      }
      return acc
    },
    {} as Record<number | string, TokenOption[]>
  )
