import styled from 'styled-components'
import { Progress, Icon } from 'antd'

const ProgressPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const ProgressBarDiv = styled.div`
  background-color: white;
  border-radius: 100px;
  padding: 5px;
`
const ProgressBarStyle = styled(Progress)`
  .ant-progress-circle-path {
    stroke: rgb(0, 212, 150) !important;
    stroke-width: 7 !important;
  }
`

const Percent = styled.h2`
  position: absolute;
  top: 5vh;
  margin: auto;
  width: 120px;
  margin: 2px;
  text-align: center;
`

const Description = styled.p`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
`

const TreuIconBackground = styled.div`
  background-color: white;
  padding: 12px;
  border-radius: 30px;
  margin-top: -1px;
  position: absolute;
`

const TrueIcon = styled(Icon)`
  svg {
    width: 2.2em;
    height: 1.8em;
    fill: #70b1fa;
    position: absolute;
    margin-top: -15px;
    margin-left: -15px;
  }

  .sc-jTzLTM {
    border: red solid;
    background-color: red;
  }
  .anticon-arrow-left {
    border: red solid;
    background-color: red;
  }

  .sc-jzJRlG {
    border: red solid;
    background-color: red;
  }
`

export {
  ProgressBarStyle,
  Percent,
  ProgressPage,
  Description,
  ProgressBarDiv,
  TrueIcon,
  TreuIconBackground
}
