import styled from "styled-components"

const Homediv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  text-align: center;
  margin: auto;

  @media only screen and (min-width: 600px) {
    margin: auto;
  }
  @media only screen and (min-width: 400px) {
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

  @media only screen and (min-width: 800px) {
    width: 100%;
    height: 320px;
  }
  @media only screen and (max-width: 400px) {
    height: 242px;
  }
`

const StyledLogo = styled.img`
  z-index: 2;
  position: absolute;
  left: calc(50vw - 101px);
  top: calc(100% - 202px);
  width: 202px;
  height: 67px;
  @media only screen and (min-width: 800px) {
    z-index: 1;
    position: absolute;
    left: calc(50vw - 101px);
    top: calc(100% - 202px);
  }
  @media only screen and (min-width: 600px) {
    left: calc(50% - 101px);
    top: calc(100% - 202px);
  }
`

const TextStyled = styled.p`
  text-align: center;
  color: #000;
  font-size: 20px;
  line-height: 1.3;
  font-weight: bold;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  margin: 56px 17px 31px 18px;
  letter-spacing: normal;
  @media only screen and (min-width: 600px) {
    margin: 95px;
  }
`

export { StyledImg, TextStyled, StyledLogo, BackgroundDiv, Homediv }
