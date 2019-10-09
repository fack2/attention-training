import { Button } from 'antd';
import React, { Component } from 'react';
import { ProgressBarStyle, Counter, Progressstyle } from './ProgressBar'

class ProgressBar extends Component {

  state = {
    percent: 100 / 18,
    counter: 1
  };
  increase = () => {
    let { counter, percent } = this.state

    if (percent > 100) {
      percent = 100;
      counter = 17
    }

    this.setState({ percent: percent + 100 / 18 })
    this.setState({ counter: counter + 1 })

  };

  render() {
    return (
      <div>
        <ProgressBarStyle>
          <Counter>
            {this.state.counter} of 18
          </Counter>

          <Progressstyle
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}

            Color={'red'}
            percent={this.state.percent}
            showInfo={false}
          />


          <Button onClick={this.increase} >next </Button>


        </ProgressBarStyle>

      </div>
    )
  }
}



export default ProgressBar


