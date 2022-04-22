import React, {JSXElementConstructor, ReactElement} from 'react'

type TabsPanelsProps = {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>[]
    | ReactElement<any, string | JSXElementConstructor<any>>
  value: string | number
}
const TabsPanels: React.FC<TabsPanelsProps> = ({children, value}) => {
  const upChild = React.Children.map(children, child => {
    return React.cloneElement(child, {valueTabs: value})
  })
  return <>{upChild}</>
}
export default TabsPanels
