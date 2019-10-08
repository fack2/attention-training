import React from "react"
import BackIcon from "./BackIcon"

const BackButton = ({ history }) => {
  return (
    <BackIcon
      type="arrow-left"
      onClick={() => {
        history.goBack()
      }}
    />
  )
}
export default BackButton
