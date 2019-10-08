import React from "react"
import BackButton from "../sharedComponent/BackButton"

const Home = props => {
  return (
    <div>
      <BackButton props={props}></BackButton>
      <p>in home</p>
    </div>
  )
}
export default Home
