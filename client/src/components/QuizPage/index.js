import React from "react"
import BackButton from "../sharedComponent/BackButton"
import Card from "../sharedComponent/Card"

const Quiz = ({ history }) => {
  return (
    <div>
      <BackButton history={history}></BackButton>
      <Card></Card>
    </div>
  )
}
export default Quiz
