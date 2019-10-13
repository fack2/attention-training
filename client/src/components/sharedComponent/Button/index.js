import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
  background: ${({ background }) => background || "#378BED"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "white"};
  margin: ${({ margin }) => margin || "0.5em 1em"};
  box-shadow: 0px 10px 25px #737C7D
;
  border-radius: ${({ borderRadius }) => borderRadius || "15px"};
  padding:${({ padding }) => padding || "14px"};
  display: inline-block;
  text-align: center;
  width:${({ width }) => width || "40px"}
  border-style: none;
&:hover{
    background:${({ hoverColor }) => hoverColor || "#ED6237"};
    color:black;
}
@media only screen and (min-width: 800px) {
margin: ${({ desktopmargin }) => desktopmargin || "-1rem 27rem 26rem"};
 padding:${({ desktoppadding }) => desktoppadding || "19px"};
}
`

export default StyledLink
