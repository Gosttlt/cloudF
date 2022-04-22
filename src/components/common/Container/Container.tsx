import React, {ReactNode} from 'react'

import classes from './Container.module.scss'

type Props = {
  children: ReactNode
}

const Container: React.FC<Props> = ({children}) => (
  <div className={classes.container}>{children}</div>
)

export default Container
