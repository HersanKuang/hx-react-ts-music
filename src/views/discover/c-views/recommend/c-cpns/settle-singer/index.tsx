import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerWrapper } from '@/views/discover/c-views/recommend/c-cpns/settle-singer/style'
import AppHeaderV2 from '@/components/app-header-v2'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { settleSingers } = useAppSelector((state) => ({
    settleSingers: state.recommend.settleSingers
  }))

  return (
    <SingerWrapper>
      <AppHeaderV2
        title="入驻歌手"
        moreText="查看全部 &gt;"
        moreLink="#/discover/artist"
      />
      <div className="artists">
        {settleSingers.map((item) => (
          <a href="#/discover/artist" key={item.id} className="item">
            <img src={getImageSize(item.picUrl, 80)} alt="" />
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="alias">{item.alias.join(' ')}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SingerWrapper>
  )
}

export default memo(SettleSinger)
