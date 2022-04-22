import React from 'react'

const About = React.lazy(() => import('./About'))
const Quotes = React.lazy(() => import('./Quotes'))

export type RoutsType = {
  name: string
  path: string
  component: React.FC
}

const routes: RoutsType[] = [
  {name: 'О приложении', path: '/', component: About},
  {name: 'Котировки', path: '/quotes', component: Quotes},
]
export default routes
