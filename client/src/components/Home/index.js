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

const Home = ({ history }) => {
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

      <StyledLink
        margin="2.8em"
        width="133px"
        fontSize="34px"
        hoverColor="#00FF00"
        to="/quiz-instructions"
      >
        Let's Go
      </StyledLink>
    </>
  )
}
export default Home
