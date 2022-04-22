import React from 'react'

import classes from './Loader.module.scss'

const Loader: React.FC = () => (
  <div className={classes.wrapper}>
    <div className={classes.text}>Loading...</div>
    <div className={classes.spinner}>
      <div />
    </div>
  </div>
)

export default Loader
