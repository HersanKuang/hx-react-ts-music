import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hxRequest from '@/service'

interface IProps {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])
  useEffect(() => {
    hxRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        console.log(res)
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      {banners.map((item, index) => (
        <div key={index}>{item.imageUrl}</div>
      ))}
    </div>
  )
}

export default memo(Recommend)
