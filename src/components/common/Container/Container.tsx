import React, {memo, ReactNode} from 'react'

import classes from './Container.module.scss'

type Props = {
  children: ReactNode
}

const Container: React.FC<Props> = memo(({children}) => (
  <div className={classes.container}>{children}</div>
))

export default Container
