import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from '@/views/discover/c-views/recommend/c-cpns/top-ranking-item/style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  return <RankingItemWrapper>{itemData.name}</RankingItemWrapper>
}

export default memo(TopRankingItem)
