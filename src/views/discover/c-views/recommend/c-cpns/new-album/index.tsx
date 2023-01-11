import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import { AlbumWrapper } from '@/views/discover/c-views/recommend/c-cpns/new-album/style'
import AreaHeader from '@/components/area-header'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  /** 定义内部数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /** 事件处理函数 */
  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }

  return (
    <AlbumWrapper>
      <AreaHeader title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[1, 2].map((item) => (
              <h1 key={item}>{item}</h1>
            ))}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
