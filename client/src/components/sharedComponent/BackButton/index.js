import React from "react"
import BackIcon from "./BackIcon"

const BackButton = ({ history, onClick }) => {
  return (
    <BackIcon
      type="arrow-left"
      onClick={() => {
        history.goBack()
        onClick()
      }}
    />
  )
}
export default BackButton
