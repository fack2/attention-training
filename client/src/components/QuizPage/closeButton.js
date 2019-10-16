import { Icon } from "antd"
import styled from "styled-components"

const CloseButton = styled(Icon)`
  color: ${({ color }) => color || "#70b1fa"};
  margin: ${({ margin }) => margin || "9px 22px 0px"};
  display: flex;
`
export default CloseButton
