import React from "react"
import BackIcon from "./BackIcon"

const BackButton = ({ history, onClick, position, margin }) => {
  return (
    <BackIcon
      margin={margin}
      position={position}
      type="arrow-left"
      onClick={() => {
        try {
          history.goBack()
        } catch (e) {}
        if (onClick) onClick()
      }}
    />
  )
}
export default BackButton
