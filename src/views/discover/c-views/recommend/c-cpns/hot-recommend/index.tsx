import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from '@/views/discover/c-views/recommend/c-cpns/hot-recommend/style'
import AreaHeader from '@/components/area-header'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqualApp
  )
  return (
    <HotRecommendWrapper>
      <AreaHeader
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="hot-recommend">
        {hotRecommends.map((item) => (
          <div className="item" key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
