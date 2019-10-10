import styled from "styled-components"
import { Progress } from "antd"

const ProgressPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const ProgressBarStyle = styled(Progress)`
  border: grey 1px red;

  .ant-progress-text {
    border: solid red;
  }
`
const Percent = styled.h2`
position: absolute;
top: 5vh;
margin: auto;
positon: absolute
width: 48px;
margin: 2px;
text-align: center;
`
const Description = styled.p`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
`

export { ProgressBarStyle, Percent, ProgressPage, Description }
