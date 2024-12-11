export const isMobile = () => {
  if (typeof window !== 'undefined' && window.navigator) {
    return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    )
  }
  return false
}
