import styled from "styled-components"
import { Progress } from "antd"

const ProgressBarContainer = styled.div`
  margin: auto;
  width: 73%;
  min-width: 235px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const Counter = styled.div`
  color: grey;
  text-align: center;
`
const ProgressBarStyle = styled(Progress)`
  border: grey 1px solid;
  border-radius: 6px;
  width: 100%;
  max-width: 500px;
  min-width: 230px;
  margin: 5px;
  .ant-progress-bg {
    border-radius: 6px;
    height: 15px !important;
    background-image: linear-gradient(
      to right,
      #70b1fa 0%,
      #70b1fa 100%
    ) !important;
  }
`

export { ProgressBarContainer, Counter, ProgressBarStyle }
