/* eslint-disable camelcase */
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
  background: ${({ background }) => background || "#378BED"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "white"};
  margin: ${({ margin }) => margin || "0.5em 1em"};
  box-shadow: ${({ box_shadow }) => box_shadow || "0px 10px 25px #737C7D"}
;
  border-radius: ${({ border_radius }) => border_radius || "15px"};
  padding:${({ padding }) => padding || "12px"};
  display: inline-block;
  text-align:${({ text_align }) => text_align || "center"};
  text-decoration-line: none;

  border:${({ border }) => border || ""}; 
  position:${({ position }) => position || "unset"}; 

  width:${({ width }) => width || "40px"}
  border-style: ${({ border_style }) => border_style || ""};
&:hover{
    background:${({ hoverColor }) => hoverColor || "#ED6237"};
    color:${({ colorhover }) => colorhover || "black"};
}
@media only screen and (min-width: 800px) {
margin: ${({ desktopmargin }) => desktopmargin || "13px"};
padding:${({ desktoppadding }) => desktoppadding || "28px 15px"};
}
`

export default StyledLink
