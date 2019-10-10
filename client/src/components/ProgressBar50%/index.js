import React, { Component } from 'react'
import CircleProgressBar from '../sharedComponent/CircleProgressBar'

class ProgressBar50 extends Component {

  render() {
    return (
      <CircleProgressBar title="Good job!" percent='100%' description=' you are half way there.' button='Let’s keep going!' />
    )
  }
}

export default ProgressBar50