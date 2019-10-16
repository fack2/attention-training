import { Card } from "antd"
import styled from "styled-components"

const StyledCard = styled(Card)`
  background-size: cover !important;
  background: ${({ bg }) => bg || "#fff"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "#000"};
  margin-top: ${({ margin_top }) => margin_top || "10px"};
  position: ${({ position }) => position || "unset"};
  box-shadow: -0px -7px ${({ shadow_color }) => shadow_color || "#eee"};
  border: solid 0.1em #ddd;
  border-radius: 15px;
  padding-top: 10px;
  text-align: center;
  width: ${({ width }) => width || "80%"};
  height: 79vh;
  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "unset")};
 
  }
`
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export { StyledCard, CardWrapper }
