import Container from 'components/common/Container'
import Loader from 'components/common/Loader'
import Header from 'components/Header'
import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import NotFound from 'routes/NotFound'
import routes from 'routes/routes'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  )
}

export default App
