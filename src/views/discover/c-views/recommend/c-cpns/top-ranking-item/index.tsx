import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from '@/views/discover/c-views/recommend/c-cpns/top-ranking-item/style'
import { getImageSize } from '@/utils/format'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover cover" title={itemData.name}></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {itemData?.tracks.slice(0, 10).map((item: any, index: number) => (
          <div className="item" key={item.id}>
            <div className="index">{index + 1}</div>
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="operate">
                <button className="btn sprite_02 play"></button>
                <button className="btn sprite_icon2 add"></button>
                <button className="btn sprite_02 favor"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <Link to={`/discover/ranking?id=${itemData.id}`}>查看全部 &gt;</Link>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(TopRankingItem)
