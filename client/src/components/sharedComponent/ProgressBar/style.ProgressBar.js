import styled from "styled-components"
import { Progress } from "antd"

const ProgressBarContainer = styled.div`
 width: 500px ;
 display: flex;
 align-items: center;
 flex-direction: column;
 position: relative;
`

const Counter = styled.div`
 color:grey;
 text-align : center
`

const ProgressBarStyle = styled(Progress)`
 
border: grey 1px solid;
  border-radius:6px;
  width: 231px ;
  margin:5px;
  .ant-progress-bg{
  border-radius:6px;
  height: 15px !important
}         
`

export { ProgressBarContainer, Counter, ProgressBarStyle }
