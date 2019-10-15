import React from "react"
import BackIcon from "./BackIcon"

const BackButton = ({ history, onClick, position }) => {
  return (
    <BackIcon
      position={position}
      type="arrow-left"
      onClick={() => {
        history.goBack()
        onClick()
      }}
    />
  )
}
export default BackButton
