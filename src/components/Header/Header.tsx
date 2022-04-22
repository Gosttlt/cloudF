import React from 'react'
import {NavLink} from 'react-router-dom'
import routes from 'routes/routes'

import classes from './Header.module.scss'

const Header: React.FC = () => (
  <header className={classes.wrapper}>
    {routes.map(route => (
      <NavLink key={route.name} to={route.path} className={classes.link}>
        {route.name}
      </NavLink>
    ))}
  </header>
)

export default Header
