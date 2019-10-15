import { Icon } from "antd"
import styled from "styled-components"

const BackIcon = styled(Icon)`
  color: ${({ color }) => color || "#70b1fa"};
  margin: ${({ margin }) => margin || "22px"};
  display: flex;
  position: ${({ position }) => position};
`
export default BackIcon
