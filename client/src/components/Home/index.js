import React from "react"
import StyledLink from "../sharedComponent/Button"
import homeBackgroud from "../../assets/homeBackground.png"
import logo from "../../assets/logoWeb.png"
import {
  StyledImg,
  TextStyled,
  StyledLogo,
  BackgroundDiv
} from "./HomeStyledComponent"

const Home = () => {
  return (
    <>
      <BackgroundDiv>
        <StyledImg alt="home" src={homeBackgroud} />
        <StyledLogo alt="logo" src={logo} />
      </BackgroundDiv>

      <TextStyled>
        The key to thriving is knowledge. Learn to make use of your ADHD
        superpowers
      </TextStyled>
      <StyledLink margin="5em" width="90px " fontSize="20px" to="/ss">
        Let's Go
      </StyledLink>
    </>
  )
}
export default Home
