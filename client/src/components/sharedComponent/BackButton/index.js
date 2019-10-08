import React from "react"
import { Icon } from "antd"
import "antd/dist/antd.css"
import styled from "styled-components"
const BackButton = ({ props }) => {
  const { history } = props
  const BackIcon = styled(Icon)`
    color: ${({ color }) => color || "#70b1fa"};
    margin: ${({ margin }) => margin || "1%"};
    float: left;
  `

  return (
    <BackIcon
      type="arrow-left"
      onClick={() => {
        history.goBack()
      }}
    ></BackIcon>
  )
}
export default BackButton
