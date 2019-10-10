import React from "react"
import BackButton from "../sharedComponent/BackButton"
import {
  Header,
  DashboardDiv,
  Icon,
  Title,
  Text,
  TitleDiv,
  PageDiv,
  Buttuns,
  RestartImg
} from "./DashboardStyledComponent"
import cardLogo from "../../assets/icon.png"
import secondLogo from "../../assets/icon2.png"
import StyledLink from "../sharedComponent/Button"
import restartVector from "../../assets/Vector.png"

const Dashboard = ({ history }) => {
  return (
    <>
      <PageDiv>
        <BackButton margin="9px 14px 3px -150px" history={history}></BackButton>
        <Header>Dashboard</Header>
        {/*card1*/}
        <DashboardDiv>
          <TitleDiv>
            <Icon alt="cardlogo" src={cardLogo} />
            <Title>Superpower subtype</Title>
          </TitleDiv>
          <Text>Revisit your ADHD subtype</Text>
          <StyledLink width="172px" fontSize="20px" to="/result">
            SEE RESULT
          </StyledLink>
        </DashboardDiv>

        {/*card2*/}
        <DashboardDiv>
          <TitleDiv>
            <Icon alt="cardlogo" src={secondLogo} />
            <Title>The Basics</Title>
          </TitleDiv>
          <Text>Find Basics information about ADHD</Text>
          <StyledLink primary width="172px" fontSize="20px" to="/basic-info">
            SEE BASICS
          </StyledLink>
        </DashboardDiv>

        {/*card3*/}
        <DashboardDiv>
          <TitleDiv>
            <Icon alt="cardlogo" src={cardLogo} />
            <Title>Superpower Skills</Title>
          </TitleDiv>
          <Text>Find and harness your own superpowers’</Text>
          <StyledLink width="172px" fontSize="19px" to="/skills">
            SEE SUPERPOWER
          </StyledLink>
        </DashboardDiv>
        {/*buttons*/}
        <Buttuns>
          <StyledLink
            primary
            width="173px"
            fontSize="20px"
            Desktopmargin="5rem 27rem 26rem"
            to="/quiz"
          >
            <RestartImg src={restartVector} />
            RESTART TEST
          </StyledLink>
          <StyledLink
            width="172px"
            fontSize="20px"
            Desktopmargin="-20rem 27rem 26rem"
            to="/about"
          >
            ABOUT US
          </StyledLink>
        </Buttuns>
      </PageDiv>
    </>
  )
}

export default Dashboard
