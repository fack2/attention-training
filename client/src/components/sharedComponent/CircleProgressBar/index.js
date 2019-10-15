import React from "react"
import {
  ProgressBarDiv,
  ProgressBarStyle,
  Percent,
  ProgressPage,
  Description,
  TrueIcon,
  TrueIconBackground,
  Counter
} from "./style.CircleProgressBar"
import Button from "../Button"
import BackButton from "../BackButton"

class CircleProgressBar extends React.Component {
  state = {
    percent: 0
  }

  componentDidMount() {
    if (this.state.percent < 50 && this.props.percentRate == 50) {
      console.log("1")
      setInterval(() => {
        if (this.state.percent < 50) {
          this.setState({ percent: this.state.percent + 1 })
        }
      }, 20)
    } else {
      if (this.state.percent < 100 && this.props.percentRate == 100) {
        setInterval(() => {
          if (this.state.percent < 100) {
            this.setState({ percent: this.state.percent + 1 })
          }
        }, 20)
      }
    }
  }
  // } else if (this.state.percent < 50) {
  //   setInterval(() => {
  //     if (this.state.percent < 50) {
  //       this.setState({ percent: this.state.percent + 1 })
  //     }
  //   }, 20)
  // }

  render() {
    return (
      <div>
        <BackButton
          position="relative"
          history={this.props.history}
          onClick={this.props.onClickBackButton}
        />
        <ProgressPage>
          <TrueIconBackground>
            <TrueIcon
              type="check-circle"
              theme="filled"
              twoToneColor="#70B1FA"
            />
          </TrueIconBackground>
          <ProgressBarDiv>
            <Percent>{this.props.percent}</Percent>
            {console.log("coutter", this.props.counter)}
            <Counter>{this.props.counter} of 18</Counter>
            <ProgressBarStyle
              type="circle"
              percent={this.state.percent}
              showInfo={false}
              fill="green"
            />
          </ProgressBarDiv>
          <Description>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </Description>
          <Button width="245px" onClick={this.props.onClick} to={this.props.to}>
            {/* name of button as a props {button} */}
            {this.props.buttonName}
          </Button>
        </ProgressPage>
      </div>
    )
  }
}

export default CircleProgressBar
