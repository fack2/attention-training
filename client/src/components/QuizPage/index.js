import React, { Component } from "react"
import { Button } from "antd"
import BackButton from "../sharedComponent/BackButton"
import Card from "../Card"
import ProgressBar from "../sharedComponent/ProgressBar"
import renderEmpty from "antd/lib/config-provider/renderEmpty"

class Quiz extends Component {
  state = {
    counter: 0
  }

  render() {
    console.log(this.state.counter, "2222")
    return (
      <div>
        <ProgressBar counter={this.state.counter}></ProgressBar>
        <BackButton history={this.props.history}></BackButton>
        <Card></Card>
        <Button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 })
          }}
        >
          next{" "}
        </Button>
      </div>
    )
  }
}
export default Quiz
