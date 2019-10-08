import React from 'react'
import StyledLink from '../sharedComponent/Button'

const Home = () => {
  return (
    <div>
      <p>in home</p>
      <StyledLink margin="5em" width="60px" to="/ss">
        Hello
      </StyledLink>
    </div>
  )
}
export default Home
