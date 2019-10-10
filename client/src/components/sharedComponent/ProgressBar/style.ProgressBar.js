import styled from "styled-components"
import { Progress } from "antd"

const ProgressBarContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 270px;
  min-width: 245px;
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
  border-radius:6px;
  width: 100% ;
  max-width:260px ; 
  min-width: 230px;
  margin:5px;
  .ant-progress-bg{
  border-radius:6px;
  height: 15px !important
  background-image: linear-gradient(to right, #70B1FA 0%, #70B1FA 100%) !important
}         
`

export { ProgressBarContainer, Counter, ProgressBarStyle }
