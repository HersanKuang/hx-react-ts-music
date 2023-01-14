import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AnchorWrapper } from '@/views/discover/c-views/recommend/c-cpns/hot-anchor/style'
import AppHeaderV2 from '@/components/app-header-v2'
import { hotRadios } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <AppHeaderV2 title="热门主播" />
      <div className="anchors">
        {hotRadios.map((item) => (
          <div className="item" key={item.picUrl}>
            <a className="image">
              <img className="image" src={item.picUrl} alt="" />
            </a>
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="position">{item.position}</div>
            </div>
          </div>
        ))}
      </div>
    </AnchorWrapper>
  )
}

export default memo(HotAnchor)
