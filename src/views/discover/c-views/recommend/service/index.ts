import hxRequest from '@/service'

export function getBanners() {
  return hxRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return hxRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return hxRequest.get({
    url: '/album/newest'
  })
}
