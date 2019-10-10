import React from "react"
import BackButton from "../sharedComponent/BackButton"
import StyledLink from "../sharedComponent/Button"

const Home = ({ history }) => {
  return (
    <div>
      <BackButton history={history}></BackButton>
      <p>in home</p>
      <StyledLink margin="5em" width="60px" to="/ss">
        Hello
      </StyledLink>

    </div>
  )
}
export default Home
