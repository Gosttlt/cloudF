import {ReactNode} from 'react'

type Props = {
  children: ReactNode
  value: string | number
  valueTabs?: string | number
}
const TabsPanel: React.FC<Props> = ({children, value, valueTabs}) => {
  return <>{valueTabs === value && children}</>
}
export default TabsPanel
