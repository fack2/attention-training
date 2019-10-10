// import { Button } from 'antd';
import React, { Component } from 'react';
import { ProgressBarContainer } from './style.CircleProgressBar'

class ProgressBar extends Component {



  render() {
    return (


      <ProgressBarContainer
        type="circle"
        percent='50'>
          <p>ProgressBar</p>
      </ProgressBarContainer >

    )
  }
}



export default ProgressBar


