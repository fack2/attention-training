import { Icon } from "antd"
import styled from "styled-components"

const BackIcon = styled(Icon)`
  color: ${({ color }) => color || "#70b1fa"};
  margin: ${({ margin }) => margin || "1%"};
  justify-content: flex-start;
`
export default BackIcon
