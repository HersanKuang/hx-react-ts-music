import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from '@/views/discover/c-views/recommend/c-cpns/top-ranking/style'
import AreaHeader from '@/components/area-header'
import { useAppSelector } from '@/store'
import TopRankingItem from '@/views/discover/c-views/recommend/c-cpns/top-ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }))
  return (
    <RankingWrapper>
      <AreaHeader title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => (
          <TopRankingItem itemData={item} key={item.id}>
            {item.name}
          </TopRankingItem>
        ))}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
