import React from "react"
import {
  ProgressBarDiv,
  ProgressBarStyle,
  Percent,
  ProgressPage,
  Description,
  TrueIcon,
  TreuIconBackground
} from "./style.CircleProgressBar"
import Button from "../Button"
import BackButton from "../BackButton"

class CircleProgressBar extends React.Component {
  state = {
    percent: 0
  }

  componentDidMount() {
    if (this.state.percent < 50) {
      setInterval(() => {
        if (this.state.percent < 50) {
          this.setState({ percent: this.state.percent + 1 })
        }
      }, 20)
    }
  }

  render() {
    return (
      <div>
        <BackButton history={this.props.history} onClick={this.props.onClickBackButton} />
        <ProgressPage>
          <TreuIconBackground>
            <TrueIcon type="check-circle" theme="filled" twoToneColor="#70B1FA" />
          </TreuIconBackground>
          <ProgressBarDiv>
            <Percent>{this.props.percent}</Percent>
            <ProgressBarStyle type="circle" percent={this.state.percent} showInfo={false} fill="green" />
          </ProgressBarDiv>
          <Description>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </Description>
          <Button width="245px" onClick={this.props.onClick}>
            {this.props.button}
          </Button>
        </ProgressPage>
      </div>
    )
  }
}

export default CircleProgressBar
