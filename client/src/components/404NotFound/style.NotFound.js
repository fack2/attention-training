import styled from "styled-components"

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Status = styled.h1`
  width: 100%;
  color: #ff5a00;
  display: flex;
  justify-content: center;
  /* top: 30%; */
  font-size: 75px;
  font-weight: 400;
  margin-top: 93px;
  margin-bottom: 0;
`
const StatusMessage = styled.h2`
  margin-top: 0;
  text-align: center;
`

export { Status, StatusMessage, NotFoundContainer }
