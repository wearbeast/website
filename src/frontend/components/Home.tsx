import * as React from 'react'
import styled from 'styled-components'

import * as Types from '../types'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Splash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const HomeContainer: React.SFC<Types.RouteProps> = ({
  route,
  setRoute,
  id,
  setID,
}) => (
  <Wrap>
    <Splash>
      <img src="/pub/logo.png" />
      <p>COMING SOON...</p>
    </Splash>
  </Wrap>
)
