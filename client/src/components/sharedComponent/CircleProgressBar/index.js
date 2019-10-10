import React from 'react'
import { ProgressBarStyle, Percent, ProgressPage, Description } from './style.CircleProgressBar'
import Button from '../Button'

class styled extends React.Component {
  state = {
    percent: 0,
  };

  componentDidMount() {

    if (this.state.percent < 50) {
      let barInterval =
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
      <ProgressPage>
        <Percent>50%</Percent>
        <ProgressBarStyle type="circle" percent={this.state.percent} showInfo={false} />
        <Description>
          <h3>Good Job!</h3>
          <p>you are half way there.</p>
        </Description>
        <Button width='245px'>Let's keep going</Button>
      </ProgressPage>
    );
  }
}


export default styled;