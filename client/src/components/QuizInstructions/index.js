import React, { Component } from "react"
import Button from "../sharedComponent/Button"
import BackButton from "../sharedComponent/BackButton"
import Card from "../Card"
import ProgressBar from "../sharedComponent/ProgressBar"
import image from "../../assets/quizInst.png"

class QuizInstructions extends Component {
  state = {
    counter: 0,
    instructions: [
      "Attention Training wants to help you live better. The first step is understanding whether or not you may have the superpowers of ADHD!",
      "In order to do this, we’ll ask a few questions to get to know you better. Don’t worry! It only takes about 3 minutes to complete.",
      "After you finish the quiz, we will provide you with the resources you need to harness your superpowers!",
      "Ready to get you know your superpowers?"
    ]
  }

  onClick = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      if (this.state.counter === 4) this.props.history.push("/quiz")
    })
  }

  render() {
    return (
      <>
        <div style={{ height: "42px", display: "flex" }}>
          {this.props.location.state && !this.props.location.state.flag ? (
            <BackButton
              position='absolute'
              margin='22px'
              history={this.props.history}
            ></BackButton>
          ) : null}
          <ProgressBar
            counter={this.state.counter + 1}
            maxCounter={4}
          ></ProgressBar>
          <Button
            margin='22px 20px 0px 0px'
            hoverColor='#70B1FA'
            background='#70B1FA'
            color='#000'
            border_radius='6px'
            width='30px'
            fontSize='14px'
            padding='2px 2px 0px 4px'
            desktoppadding='2px 2px 0px 4px'
            desktopmargin='22px 20px 0px 0px'
            to='/quiz'
          >
            skip
          </Button>
        </div>
        <Card
          display='flex'
          onClick={this.onClick}
          bg={`url(${image}) space center whitesmoke`}
          color='#fff'
          info={
            <>
              <style>{`.ant-card-body{ margin:auto }`}</style>
              <p
                style={{
                  // height: "300px",
                  background: "#ffffffcc",
                  padding: "20px 10px",
                  margin: "28px 0px",
                  color: "#000",
                  "font-size": `${this.state.counter === 3 ? "35px" : "24px"}`,
                  "font-weight": "bold"
                }}
              >
                {this.state.instructions[this.state.counter]}
              </p>
            </>
          }
        ></Card>
        <p
          style={{
            margin: "30px 0 0 0",
            display: "flex",
            "justify-content": "center"
          }}
        >
          {this.state.counter < 3
            ? "Tap the card to next"
            : "Tap the card to start"}
        </p>
      </>
    );
  }
}
export default QuizInstructions
