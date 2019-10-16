import React, { Component } from "react"
import Button from "../sharedComponent/Button"
import BackButton from "../sharedComponent/BackButton"
import Card from "../Card"
import ProgressBar from "../sharedComponent/ProgressBar"
import CircleProgressBar from "../sharedComponent/CircleProgressBar/"
import { Icon } from "antd"
import Close from "./closeButton"
// import Close from "../sharedComponent/BackButton/BackIcon"
import qustions from "../../Questions"
class Quiz extends Component {
  state = {
    counter: 1,
    options: "",
    score: [],
    percent: 0
  }
  /**
   * @param string value of choice
   * get value of choise to calclate score from {event.target,name}
   * push value to score array
   * increase counter 1
   * check half question and last question to show circle progress bar
   */
  clicked = ({ target }) => {
    const { name } = target

    const { score } = this.state
    score[this.state.counter - 1] = parseInt(name)
    this.setState({
      score: score,
      counter: this.state.counter + 1
    })
    if (this.state.counter == 9) {
      this.setState({ percent: 50 })
    }
    if (this.state.counter === 18) {
      this.setState({ percent: 100 })
    }
  }
  componentDidMount() {
    this.setState({
      options: (
        <div>
          <Button
            color="#344356"
            colorhover="#fff"
            text_align="left"
            background="#fff"
            box_shadow="unset"
            border="3px solid #E8EEF4"
            border_radius="20px"
            fontSize="20px"
            width="70%"
            name={0}
            value={"111111"}
            onClick={this.clicked}
          >
            A&nbsp; Never
          </Button>
          <Button
            color="#344356"
            colorhover="#fff"
            text_align="left"
            background="#fff"
            box_shadow="unset"
            border="3px solid #E8EEF4"
            border_radius="20px"
            fontSize="20px"
            width="70%"
            name={1}
            onClick={this.clicked}
          >
            B&nbsp; Rarely
          </Button>
          <Button
            color="#344356"
            colorhover="#fff"
            text_align="left"
            background="#fff"
            box_shadow="unset"
            border="3px solid #E8EEF4"
            border_radius="20px"
            fontSize="20px"
            width="70%"
            name={2}
            onClick={this.clicked}
          >
            C&nbsp; Sometimes
          </Button>
          <Button
            color="#344356"
            colorhover="#fff"
            text_align="left"
            background="#fff"
            box_shadow="unset"
            border="3px solid #E8EEF4"
            border_radius="20px"
            fontSize="20px"
            width="70%"
            name={3}
            onClick={this.clicked}
          >
            D&nbsp; Often
          </Button>
        </div>
      )
    })
  }
  render() {
    let { counter } = this.state
    return this.state.percent === 50 ? (
      <CircleProgressBar
        counter={counter - 1}
        percentRate="50"
        percent="50%"
        title="Good job!"
        description=" you are half way there."
        buttonName="LET’S KEEP GOING!"
        onClick={() => {
          this.setState({ percent: 51 })
        }}
        history={this.props.history}
        onClickBackButton={() => {
          this.setState({ percent: 49 })
          localStorage.setItem("scrore", this.state.score)
          this.setState({ counter: counter - 1 })
        }}
      />
    ) : this.state.percent === 100 ? (
      <CircleProgressBar
        counter={counter - 1}
        percentRate="100"
        percent="100%"
        title="You are awesome!"
        description="We’re completing your profile now."
        to={`/results/${2}`}
        buttonName="See result"
        onClick={() => {
          this.setState({ percent: 101 })
        }}
        history={this.props.history}
        onClickBackButton={() => {
          this.setState({ percent: 98 })
          localStorage.setItem("scrore", this.state.score)
          this.setState({ counter: counter - 1 })
        }}
      />
    ) : (
      <div style={{ textAlign: "center" }}>
        <Close type="close" />
        <div>
          <BackButton
            position="absolute"
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
              <p
                style={{
                  textAlign: "justify",
                  marginTop: "10px",
                  height: "90px",
                  padding: "8px 20px"
                }}
              >
                {qustions[this.state.counter - 1]}
              </p>
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
