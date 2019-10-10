import { Button } from "antd"
import React, { Component } from "react"
import { ProgressBarStyle, Counter, ProgressBarContainer } from "./style.ProgressBar"

class ProgressBar extends Component {
  render() {
    return (
      <ProgressBarContainer>
        <Counter>{this.props.counter} of 18</Counter>
        <ProgressBarStyle
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068"
          }}
          Color={"red"}
          percent={(this.props.counter / 18.0) * 100}
          showInfo={false}
        />
      </ProgressBarContainer>
    )
  }
}
export default ProgressBar
