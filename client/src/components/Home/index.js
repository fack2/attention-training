import React from "react"
import StyledLink from "../sharedComponent/Button"
import homeBackgroud from "../../assets/Home.png"
import logo from "../../assets/logoWeb.png"
import {
  StyledImg,
  TextStyled,
  StyledLogo,
  BackgroundDiv,
  Homediv
} from "./HomeStyledComponent"

const Home = () => {
  return (
    <Homediv>
      <BackgroundDiv>
        <StyledImg alt="home" src={homeBackgroud} />
        <StyledLogo alt="logo" src={logo} />
      </BackgroundDiv>
      <TextStyled>
        The key to thriving is knowledge. Learn to make use of your ADHD
        superpowers
      </TextStyled>

      <StyledLink
        margin="30px auto"
        width="100px"
        fontSize="20px"
        hoverColor="#FF8C00"
        desktopmargin="auto"
        to="/quiz-instructions"
      >
        Let's Go
      </StyledLink>
    </Homediv>
  )
}
export default Home
