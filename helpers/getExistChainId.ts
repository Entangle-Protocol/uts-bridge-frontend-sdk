export const getExistChainId = (chainId: string): string => {
  if (chainId === '11100000000000000501') {
    return '900'
  }

  return chainId
}
