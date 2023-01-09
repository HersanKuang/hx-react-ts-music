import hxRequest from '@/service'

export function getBanners() {
  return hxRequest.get({
    url: '/banner'
  })
}
