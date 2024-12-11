export const timeAgo = (dateString: string) => {
  const now = new Date()
  const pastDate = new Date(dateString)
  const diffInMs = +now - +pastDate

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  if (diffInMinutes < 60) {
    if (diffInMinutes == 0) {
      return `<1 min ago`
    }
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'min' : 'mins'} ago`
  } else if (diffInHours < 24) {
    const remainingMinutes = diffInMinutes % 60
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ${remainingMinutes > 0 ? `${remainingMinutes} mins` : ''} ago`
  } else {
    const remainingHours = diffInHours % 24
    return `${diffInDays} ${diffInDays > 1 ? 'days' : 'day'} ${remainingHours > 0 ? `${remainingHours} hour${remainingHours > 1 ? 's' : ''}` : ''} ago`
  }
}
