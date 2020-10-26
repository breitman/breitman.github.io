import React, { useEffect, useState } from 'react'

import {NavBar} from './components'
import Routes from './routes'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faFileAlt} from '@fortawesome/free-solid-svg-icons'
import {PacmanLoader} from 'react-spinners'
import styled from 'styled-components'

library.add(fab, faFileAlt)

const Message = styled.p`
  font-size: 50px;
  padding-top: 80px;
`

const Container = styled.div`
  margin-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const App = () => {

  const [isLoaded, setLoaded] = useState(false);

  useEffect(()=>{
    setLoaded(true);
  }, [isLoaded])

  return (
    isLoaded ? 
    <div>
      <NavBar />
      <Routes />
    </div>
    :
    <Container>
      <PacmanLoader color='#6200EE'size='60'/>
      <Message>
      One moment, loading Ben's portfolio
      </Message>
    </Container>
  )
}

export default App;
