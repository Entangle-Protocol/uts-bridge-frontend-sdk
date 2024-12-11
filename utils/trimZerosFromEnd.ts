export const trimZerosFromEnd = (str: string, addZeros: number = 0) => {
  let noZeros = str
  if (str.includes('.')) {
    noZeros = String(str).replace(/0+$/, '')
  }

  const res = noZeros.endsWith('.') ? noZeros.slice(0, -1) : noZeros

  if (addZeros > 0) {
    if (res.length === 0) {
      return `0.${'0'.repeat(addZeros)}`
    }
    if (!res.includes('.')) {
      return `${res}.${'0'.repeat(addZeros)}`
    }
  }

  return res
}
