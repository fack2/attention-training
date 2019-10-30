import styled from "styled-components"
import { Progress } from "antd"

const ProgressBarContainer = styled.div`
  margin: ${({ margin }) => margin || "auto"};

  width: 80%;
  min-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const Counter = styled.div`
  color: grey;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`
const ProgressBarStyle = styled(Progress)`
  border: grey 1px solid;
  border-radius: 6px;
  width: 80%;
  max-width: 400px;
  min-width: 188px;
  margin: 5px auto;
  .ant-progress-bg {
    border-radius: 6px;
    height: 15px !important;
    background-image: linear-gradient(to right, #70b1fa 0%, #70b1fa 100%) !important;
  }
`

export { ProgressBarContainer, Counter, ProgressBarStyle }
