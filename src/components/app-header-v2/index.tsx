import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV2Wrapper } from '@/components/app-header-v2/style'

interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const AppHeaderV2: FC<IProps> = (props) => {
  const { title, moreLink, moreText } = props
  return (
    <HeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      {moreText && moreLink && <a href={moreLink}>{moreText}</a>}
    </HeaderV2Wrapper>
  )
}

export default memo(AppHeaderV2)
