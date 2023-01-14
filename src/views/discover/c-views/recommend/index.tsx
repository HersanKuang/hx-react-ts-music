import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import {
  fetchRankingDataAction,
  fetchRecommendDataAction
} from '@/views/discover/c-views/recommend/store'
import MainBanner from '@/views/discover/c-views/recommend/c-cpns/main-banner'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import HotRecommend from '@/views/discover/c-views/recommend/c-cpns/hot-recommend'
import NewAlbum from '@/views/discover/c-views/recommend/c-cpns/new-album'
import TopRanking from '@/views/discover/c-views/recommend/c-cpns/top-ranking'
import UserLogin from '@/views/discover/c-views/recommend/c-cpns/user-login'
import SettleSinger from '@/views/discover/c-views/recommend/c-cpns/settle-singer'
import HotAnchor from '@/views/discover/c-views/recommend/c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  /** 获取banner数据 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
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
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
