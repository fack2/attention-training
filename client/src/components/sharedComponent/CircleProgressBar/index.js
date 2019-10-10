import React from 'react'
import { ProgressBarStyle, Percent, ProgressPage, Description } from './style.CircleProgressBar'
import Button from '../Button'
import BackButton from '../BackButton'

class CircleProgressBar extends React.Component {
  state = {
    percent: 0,
  };

  componentDidMount() {
    if (this.state.percent < 50) {
      setInterval(
        () => {
          if (this.state.percent < 50) {
            this.setState({ percent: this.state.percent + 1 })
          }
        }
        , 20)
    }
  }

  render() {
    return (
      <div>
        <BackButton />
        <ProgressPage>
          <Percent>{this.props.percent}</Percent>
          <ProgressBarStyle type="circle" percent={this.state.percent} showInfo={false} />
          <Description>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </Description>
          <Button width='245px'>{this.props.button}</Button>
        </ProgressPage>
      </div>
    );
  }
}


export default CircleProgressBar;