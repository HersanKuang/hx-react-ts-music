import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from '@/views/discover/c-views/recommend/store'
import MainBanner from '@/views/discover/c-views/recommend/c-cpns/main-banner'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  /** 获取banner数据 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <MainBanner />
      <div className="content wrap-v2">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
