import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { NavWrapper } from '@/views/discover/style'
import { discoverMenu } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div className="discover">
      <NavWrapper>
        <div className="nav wrap-v1">
          {discoverMenu.map((item) => (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          ))}
        </div>
      </NavWrapper>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
