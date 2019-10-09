import styled from "styled-components"

const BackgroundDiv = styled.div`
  position: relative;
  margin: 0;
`
const StyledImg = styled.img`
  background-size: cover;
  padding: 0px;
  margin: 0px;
  z-index: 2;
  width: 100%;
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
    margin-left: -742px;
    margin-top: 94px;
  }
`

const TextStyled = styled.p`
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 25px;
  line-height: 1.3;
  font-weight: bold;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  margin: 2rem;
  letter-spacing: normal;
  @media only screen and (min-width: 600px) {
    line-height: 13.3;
    margin: 2rem;
  }
`

export { StyledImg, TextStyled, StyledLogo, BackgroundDiv }
