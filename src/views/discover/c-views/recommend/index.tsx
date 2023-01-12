import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchRankingDataAction
} from '@/views/discover/c-views/recommend/store'
import MainBanner from '@/views/discover/c-views/recommend/c-cpns/main-banner'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import HotRecommend from '@/views/discover/c-views/recommend/c-cpns/hot-recommend'
import NewAlbum from '@/views/discover/c-views/recommend/c-cpns/new-album'
import TopRanking from '@/views/discover/c-views/recommend/c-cpns/top-ranking'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  /** 获取banner数据 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchRankingDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <MainBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
