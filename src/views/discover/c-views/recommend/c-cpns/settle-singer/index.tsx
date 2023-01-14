import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerWrapper } from '@/views/discover/c-views/recommend/c-cpns/settle-singer/style'
import AppHeaderV2 from '@/components/app-header-v2'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  return (
    <SingerWrapper>
      <AppHeaderV2
        title="入驻歌手"
        moreText="查看全部 &gt;"
        moreLink="#/discover/artist"
      />
    </SingerWrapper>
  )
}

export default memo(SettleSinger)
