import * as React from 'react'
import * as ReactDOM from 'react-dom'

const { useState } = React

import { GlobalStyle, NotFound, HomeContainer } from './components'

const Router: React.SFC<{}> = () => {
  const [route, setRoute] = useState('home')
  const [id, setID] = useState('0')

  const routing = {
    route,
    setRoute,
    id,
    setID,
  }

  switch (route) {
    case 'home':
      return <HomeContainer {...routing} />
    default:
      return <NotFound />
  }
}

const App: React.SFC<{}> = () => (
  <>
    <Router />
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))
