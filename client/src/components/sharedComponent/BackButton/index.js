import React, { useState } from "react"
import { Icon } from "antd"
import "antd/dist/antd.css"
import "./style.css"

const BackButton = ({ props }) => {
  const { history } = props

  return (
    <Icon
      className="Back-button"
      type="arrow-left"
      onClick={() => {
        history.goBack()
      }}
    />
  )
}
export default BackButton
