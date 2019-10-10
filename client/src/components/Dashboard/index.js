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
  Buttuns
} from "./DashboardStyledComponent"
import cardLogo from "../../assets/icon.png"
import secondLogo from "../../assets/icon2.png"
import StyledLink from "../sharedComponent/Button"

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
          <StyledLink width="116px" fontSize="20px">
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
          <StyledLink primary width="116px" fontSize="20px">
            SEE RESULT
          </StyledLink>
        </DashboardDiv>

        {/*card3*/}
        <DashboardDiv>
          <TitleDiv>
            <Icon alt="cardlogo" src={cardLogo} />
            <Title>Superpower Skills</Title>
          </TitleDiv>
          <Text>Find and harness your own superpowers’</Text>
          <StyledLink width="116px" fontSize="20px">
            SEE RESULT
          </StyledLink>
        </DashboardDiv>
        {/*buttons*/}
        <Buttuns>
          <StyledLink primary width="144px" fontSize="20px">
            RESTART TEST
          </StyledLink>
          <StyledLink width="116px" fontSize="20px">
            ABOUT US
          </StyledLink>
        </Buttuns>
      </PageDiv>
    </>
  )
}

export default Dashboard
