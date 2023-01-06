import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  return <div>Djradio</div>
}

export default memo(Djradio)
