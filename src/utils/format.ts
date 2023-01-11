export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageSize(imageUrl: string, width: number, height = width) {
  return imageUrl + `?parma=${width}x${height}`
}
