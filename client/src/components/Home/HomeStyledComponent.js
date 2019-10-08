import styled from "styled-components"

const BackgroundDiv = styled.div`
  position: relative;
`
const StyledImg = styled.img`
  padding: 0px;
  margin: 0px;
  z-index: 2;
  clip-path: ellipse(564px 200px at -34% 24%);
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 320px;
    clip-path: ellipse(1118px 608px at 69% 7%);
  }
`

const StyledLogo = styled.img`
  z-index: 1;
  position: absolute;
  margin-left: -273px;
  margin-top: 94px;
  @media only screen and (min-width: 600px) {
    z-index: 1;
    position: absolute;
    margin-left: -774px;
    margin-top: 94px;
  }
`

const TextStyled = styled.p`
  text-align: center;
  font-size: 25px;
  font-family: hk grotesk, serif;
  font-weight: 700;
`

export { StyledImg, TextStyled, StyledLogo, BackgroundDiv }
