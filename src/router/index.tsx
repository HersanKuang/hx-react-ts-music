import React from 'react'
import { type RouteObject } from 'react-router-dom'
import Discover from '@/views/discover'

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
