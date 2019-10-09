import styled from "styled-components"
import { Progress } from "antd"

const ProgressBarStyle = styled.div`
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

const Progressstyle = styled(Progress)`
 
border: grey 1px solid;
  border-radius:6px;
  width: 231px ;
  margin:5px;
.ant-progress-bg{
  border-radius:6px;
  height: 15px !important
}         
`

export { ProgressBarStyle, Counter, Progressstyle }
