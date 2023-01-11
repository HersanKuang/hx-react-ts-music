import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import { AlbumWrapper } from '@/views/discover/c-views/recommend/c-cpns/new-album/style'
import AreaHeader from '@/components/area-header'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  /** 定义内部数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /** redux中获取数据 */
  const { newAlbum } = useAppSelector((state) => ({
    newAlbum: state.recommend.newAlbums
  }))

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
            {[0, 1].map((item) => (
              <div key={item}>
                <div className="album-list">
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((album) => (
                    <NewAlbumItem key={album.id} itemData={album} />
                  ))}
                </div>
              </div>
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
