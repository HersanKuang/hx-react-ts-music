import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  HeaderLeft,
  HeaderRight,
  HeaderWrapper
} from '@/components/app-header/style'
import headerTitles from '@/assets/data/header_titles.json'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
interface IShowItem {
  title: string
  type: string
  link: string
}

const AppHeader: FC<IProps> = () => {
  // 组件的展示
  const showItem = (item: IShowItem) => {
    return item.type === 'path' ? (
      <NavLink to={item.link}>
        {item.title}
        <i className="icon sprite_01"></i>
      </NavLink>
    ) : (
      <a href={item.link} rel="noreferrer" target="_blank">
        {item.title}
      </a>
    )
  }
  return (
    <HeaderWrapper>
      <div className="content warp-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item, index) => (
              <div className="item" key={index}>
                {showItem(item)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
