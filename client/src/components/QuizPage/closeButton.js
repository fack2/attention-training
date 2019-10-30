import { Icon } from "antd"
import styled from "styled-components"

const CloseButton = styled(Icon)`
  color: ${({ color }) => color || "#70b1fa"};
  margin: ${({ margin }) => margin || "22px 13px 0px 0px"};
  display: flex;
  float: right;
`
export default CloseButton
