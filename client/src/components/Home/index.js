import React from "react"
import BackButton from "../sharedComponent/BackButton"
import Card from "../sharedComponent/Card"
import StyledLink from "../sharedComponent/Button"

const Home = ({ history }) => {
  return (
    <>
      <BackButton margin="15%" history={history}></BackButton>
      <Card info={<pre>0102201</pre>}></Card>
      <Card></Card>
      <div>
        <p>in home</p>
        <StyledLink margin="5em" width="60px" to="/ss">
          Hello
        </StyledLink>
      </div>
    </>
  )
}
export default Home
