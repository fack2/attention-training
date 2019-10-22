import styled from 'styled-components'
import { Progress, Icon } from 'antd'

const ProgressPage = styled.div`
  margin-top: 125px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  font-size: 31px;
  margin: auto;
  width: 120px;
  margin: 2px;
  margin-top: 24px;
  text-align: center;
`

const Description = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
`

const TrueIconBackground = styled.div`
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
const Counter = styled.p`
  position: absolute;
  margin-top: 70px;
  margin-left: 39px;
  color: #737373;
`

export {
  ProgressBarStyle,
  Percent,
  ProgressPage,
  Description,
  ProgressBarDiv,
  TrueIcon,
  TrueIconBackground,
  Counter
}
