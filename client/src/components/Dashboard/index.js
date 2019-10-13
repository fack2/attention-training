import React from "react"
import BackButton from "../sharedComponent/BackButton"
import {
  Header,
  DashboardCard,
  Icon,
  Title,
  Text,
  Titlewrap,
  PageWrapper,
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
      <PageWrapper>
        <BackButton margin="9px 14px 3px -150px" history={history}></BackButton>
        <Header>Dashboard</Header>
        {/* card1 */}
        <DashboardCard>
          <Titlewrap>
            <Icon alt="cardlogo" src={cardLogo} />
            <Title>Superpower subtype</Title>
          </Titlewrap>
          <Text>Revisit your ADHD subtype</Text>
          <StyledLink
            background="#800080"
            width="172px"
            fontSize="20px"
            to="/result"
          >
            SEE RESULT
          </StyledLink>
        </DashboardCard>

        {/* card2 */}
        <DashboardCard>
          <Titlewrap>
            <Icon alt="cardlogo" src={secondLogo} />
            <Title>The Basics</Title>
          </Titlewrap>
          <Text>Find Basics information about ADHD</Text>
          <StyledLink
            background="#ED6237"
            width="172px"
            fontSize="20px"
            to="/basic-info"
          >
            SEE BASICS
          </StyledLink>
        </DashboardCard>

        {/* card3 */}
        <DashboardCard>
          <Titlewrap>
            <Icon alt="cardlogo" src={cardLogo} />
            <Title>Superpower Skills</Title>
          </Titlewrap>
          <Text>Find and harness your own superpowers</Text>
          <StyledLink width="172px" fontSize="19px" to="/skills">
            SEE SUPERPOWER
          </StyledLink>
        </DashboardCard>
        {/* buttons */}
        <Buttuns>
          <StyledLink
            background="#800080"
            width="173px"
            fontSize="20px"
            desktopmargin="5rem 27rem 26rem"
            to="/quiz"
          >
            <RestartImg src={restartVector} />
            RESTART TEST
          </StyledLink>
          <StyledLink
            background="#ED6237"
            width="172px"
            fontSize="20px"
            desktopmargin="-20rem 27rem 26rem"
            to="/about"
          >
            ABOUT US
          </StyledLink>
        </Buttuns>
      </PageWrapper>
    </>
  )
}

export default Dashboard
