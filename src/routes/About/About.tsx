import Container from 'components/common/Container'
import React from 'react'

import classes from './About.module.scss'

const About: React.FC = () => {
  return (
    <Container>
      <h1 className={classes.h1}>About</h1>
    </Container>
  )
}

export default About
