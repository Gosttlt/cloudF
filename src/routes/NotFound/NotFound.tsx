import Container from 'components/common/Container'
import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './NotFound.module.scss'

const NotFound: React.FC = () => (
  <Container>
    <h1>Страница не найдена.</h1>{' '}
    <NavLink to='/' className={classes.link}>
      Вернуться на главную
    </NavLink>
  </Container>
)

export default NotFound
