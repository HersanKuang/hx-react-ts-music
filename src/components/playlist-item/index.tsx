import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaylistWrapper } from '@/components/playlist-item/style'
import { formatCount, getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const PlaylistItem: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <PlaylistWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </PlaylistWrapper>
  )
}

export default memo(PlaylistItem)
