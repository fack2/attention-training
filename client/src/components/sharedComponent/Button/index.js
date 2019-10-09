import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
background: ${props => (props.primary ? "#ED6237" : "#378BED")};
font-size: ${({ fontSize }) => fontSize || "16px"};
font-family: hk grotesk, serif;
font-weight: 500;
color: ${({ color }) => color || "white"};
margin-top: ${({ marginTop }) => marginTop || "1em"};
margin-left: ${({ marginLeft }) => marginLeft || "3em"};
margin-right: ${({ marginRight }) => marginRight || "1em"};
margin-buttom: ${({ marginButtom }) => marginButtom || "1em"};
box-shadow: 0px 10px 25px rgba(84, 104, 255, 0.3);
border-radius: ${({ borderRadius }) => borderRadius || "15px"};
padding:${({ padding }) => padding || "5%"};
display: inline-block;
text-align: center;
width:${({ width }) => width || "40px"}
border-style: none;
&:hover{
background:${({ hoverColor }) => hoverColor || "#ED6237"};
color:black;
}

@media only screen and (min-width: 600px) {
margin-left: ${({ DesktopmarginLeft }) => DesktopmarginLeft || "15em"};
}
`

export default StyledLink
