import { Card } from "antd"
import styled from "styled-components"

const StyledCard = styled(Card)`
  background: ${({ bg }) => bg || "#fff"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "#000"};
  margin-top: ${({ marginTop }) => marginTop || "10px"};
  position: ${({ position }) => position || "unset"};
  box-shadow: -0px -7px ${({ shadowColor }) => shadowColor || "#eee"};
  border: solid 0.1em #ddd;
  border-radius: 15px;
  padding-top: 10px;
  text-align: -webkit-center;
  width: ${({ width }) => width || "80%"};
  height: 85vh;
  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "unset")};
`

export default StyledCard
