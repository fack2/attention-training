import React, { Component } from "react"
import Button from "../sharedComponent/Button"
import BackButton from "../sharedComponent/BackButton"
import Card from "../Card"
import ProgressBar from "../sharedComponent/ProgressBar"
import qustions from "../../Questions"
class Quiz extends Component {
  state = {
    counter: 1,
    options: "",
    score: []
  }
  clicked = ({ target }) => {
    const { name } = target
    const { score } = this.state
    score[this.state.counter - 1] = parseInt(name)
    this.setState({
      score: score,
      counter: this.state.counter + 1
    })
    // if (this.state.counter === 9) {}
    if (this.state.counter === 18) {
      window.location.href = `/dd${this.state.score}`
    }
  }
  componentDidMount() {
    this.setState({
      options: (
        <>
          <Button
            borderRadius="30px"
            Desktopmargin="1%"
            Desktoppadding="28px 15px"
            fontSize="28px"
            width={"45%"}
            name={0}
            onClick={this.clicked}
          >
            Never
          </Button>
          <Button
            borderRadius="30px"
            Desktopmargin="1%"
            Desktoppadding="28px 15px"
            fontSize="28px"
            width={"45%"}
            name={1}
            onClick={this.clicked}
          >
            Reraly
          </Button>
          <Button
            borderRadius="30px"
            Desktopmargin="1%"
            Desktoppadding="28px 15px"
            fontSize="28px"
            width={"45%"}
            name={2}
            onClick={this.clicked}
          >
            Sometimes
          </Button>
          <Button
            borderRadius="30px"
            Desktopmargin="1%"
            Desktoppadding="28px 15px"
            fontSize="28px"
            width={"45%"}
            name={3}
            onClick={this.clicked}
          >
            Often
          </Button>
        </>
      )
    })
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <BackButton
            onClick={() => {
              localStorage.setItem("scrore", this.state.score)
              if (this.state.counter > 1) this.setState({ counter: this.state.counter - 1 })
              else window.location.href = `/quiz-instructions`
            }}
            history={this.props.history}
          ></BackButton>
          <ProgressBar counter={this.state.counter}></ProgressBar>
        </div>
        <Card
          info={
            <div>
              <h2 style={{ textAlign: "justify", height: "130px", padding: "12px" }}>
                {qustions[this.state.counter - 1]}
              </h2>
              <br />
              <br />
              {this.state.options}
            </div>
          }
        ></Card>
      </div>
    )
  }
}
export default Quiz
