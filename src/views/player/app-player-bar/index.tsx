import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from '@/views/player/app-player-bar/style'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={false}>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <NavLink to={'/player'}>
            <img
              className="image"
              src="https://s4.music.126.net/style/web2/img/default/default_album.jpg"
              alt=""
            />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">日落大道</span>
              <span className="singer-name">梁博</span>
            </div>
            <div className="progress">
              <Slider tooltip={{ open: false }} max={50} />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="duration">03:35</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
