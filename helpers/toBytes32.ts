const toBytes32 = (str = '') => {
  return (
    '0x' +
    [...str]
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('')
      .padEnd(64, '0')
  )
}

export default toBytes32
