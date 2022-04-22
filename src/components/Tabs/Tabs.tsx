import React from 'react'

import classes from './Tabs.module.scss'

export type TabsType = {
  id: string | number
  name: string
}

type Props = {
  onChange: (id: string | number) => void
  tabs: TabsType[]
  tabValue: string | number
}
const Tabs: React.FC<Props> = ({onChange, tabs, tabValue}) => {
  return (
    <div className={classes.tabs}>
      {tabs.map(tab => (
        <div
          key={tab.id}
          className={`${classes.tab} ${
            tabValue === tab.id ? classes.active : ''
          }`}
          onClick={tabValue !== tab.id ? () => onChange(tab.id) : () => {}}
        >
          {tab.name}
        </div>
      ))}
    </div>
  )
}

export default Tabs
