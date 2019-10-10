import styled from "styled-components"

const Homediv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  @media only screen and (min-width: 600px) {
    margin: auto;
  }
`

const BackgroundDiv = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`
const StyledImg = styled.img`
  background-size: cover;
  padding: 0px;
  margin: 0px;
  z-index: 1;
  width: 100%;
  clip-path: ellipse(564px 200px at -34% 24%);
  @media only screen and (min-width: 800px) {
    width: 100%;
    height: 320px;
    clip-path: none;
  }
`

const StyledLogo = styled.img`
  z-index: 2;
  position: absolute;
  margin-left: -273px;
  margin-top: 94px;
  @media only screen and (min-width: 800px) {
    z-index: 1;
    position: absolute;
    margin: 100px 0px 0px -516px;
  }
`

const TextStyled = styled.p`
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 20px;
  line-height: 1.3;
  font-weight: bold;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  margin: 1rem;
  letter-spacing: normal;
  @media only screen and (min-width: 600px) {
    line-height: 13.3;
    margin: 1rem;
  }
`

export { StyledImg, TextStyled, StyledLogo, BackgroundDiv, Homediv }
