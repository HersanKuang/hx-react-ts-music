import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import {
  HeaderLeft,
  HeaderRight,
  HeaderWrapper
} from '@/components/app-header-v1/style'
import headerTitles from '@/assets/data/header_titles.json'

interface IProps {
  children?: ReactNode
}
interface IShowItem {
  title: string
  type: string
  link: string
}

const AppHeader: FC<IProps> = () => {
  // 切换导航
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
      <div className="content wrap-v1">
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
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
