import {
  InterchangeableTokens,
  TokenBridgeProtocol,
  type TokenOption,
} from '@/constants/tokens'

export const areTokensInterChangeable = (tokenA: TokenOption, tokenB: TokenOption) => {
  const isSameProtocol = tokenA.protocol === tokenB.protocol

  if (tokenA.protocol === TokenBridgeProtocol.CCTP) {
    return isSameProtocol
  }

  const isInterchangable = InterchangeableTokens[tokenA.tokenValue]?.includes(
    tokenB.tokenValue
  )

  return isSameProtocol && (isInterchangable || tokenA.tokenValue === tokenB.tokenValue)
}
