import styled from "styled-components"

const BackgroundDiv = styled.div`
  position: relative;
`
const StyledImg = styled.img`
  background: no-repeat top left;
  background-size: cover;
  clear: both;
  padding: 0px;
  margin: 0px;
  z-index: 2;
  clip-path: ellipse(564px 200px at -34% 24%);
`

const StyledLogo = styled.img`
  z-index: 1;
  position: absolute;
  margin-left: -273px;
  margin-top: 94px;
`

const TextStyled = styled.p`
  text-align: center;
  font-size: 25px;
`

export { StyledImg, TextStyled, StyledLogo, BackgroundDiv }
