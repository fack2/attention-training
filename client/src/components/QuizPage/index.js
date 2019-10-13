import React, { Component } from "react"
import Button from "../sharedComponent/Button"
import BackButton from "../sharedComponent/BackButton"
import Card from "../Card"
import ProgressBar from "../sharedComponent/ProgressBar"
import qustions from "../../Questions"
class Quiz extends Component {
  state = {
    counter: 1,
    qustion: "hh"
  }
  componentDidMount() {
    this.setState({ qustion: <h3>{qustions[this.state.counter - 1]}</h3> })
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <BackButton history={this.props.history}></BackButton>
          <ProgressBar counter={this.state.counter}></ProgressBar>
        </div>
        <Card info={this.state.qustion}></Card>
        <Button
          hoverColor={"#378BED"}
          onClick={() => {
            this.setState({ counter: this.state.counter + 1, qustion: <h3>{qustions[this.state.counter]}</h3> })
          }}
        >
          next
        </Button>
      </div>
    )
  }
}
export default Quiz
