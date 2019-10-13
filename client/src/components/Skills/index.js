import React from "react"
import { FilterButton, DivStyled, FilterStyled } from "./FilterStyledComponent"
import BackButton from "../sharedComponent/BackButton"
import SkillImg1 from "../../assets/SkillImg1.png"
import SkillImg2 from "../../assets/SkillImg2.png"
import SkillImg from "./SkillsStyledComponent"
import { Link } from "react-router-dom"

import {
  Header,
  DashboardCard,
  Text,
  PageWrapper
} from "../Dashboard/DashboardStyledComponent"

class Skills extends React.Component {
  state = { cardType: false }

  ShowDisplayBio = () => {
    this.setState({ cardType: true })
  }

  displayShorterBio = () => {
    this.setState({ cardType: false })
  }

  render() {
    return (
      <>
        <PageWrapper>
          <BackButton history={this.props.history}></BackButton>

          <Header>Trainning Skills</Header>
          {/*Filter */}
          <DivStyled>
            <FilterStyled>
              <FilterButton
                background="white"
                color="black"
                borderRadius="11px"
                width="111px"
                onClick={this.displayShorterBio}
              >
                Everday
              </FilterButton>

              <FilterButton
                background="white"
                color="black"
                borderRadius="11px"
                width="111px"
                onClick={this.ShowDisplayBio}
              >
                Superpowers
              </FilterButton>
            </FilterStyled>
          </DivStyled>

          {/* card1 */}
          {this.state.cardType ? (
            <Link to="/skills/${id}`">
              <DashboardCard>
                <SkillImg src={SkillImg1} />
                <Text>What is Hyper focus?</Text>
              </DashboardCard>
            </Link>
          ) : (
            <Link to="/skills/${id}`">
              <DashboardCard>
                <SkillImg src={SkillImg2} />
                <Text>What are pomodoros?</Text>
              </DashboardCard>
            </Link>
          )}
        </PageWrapper>
      </>
    )
  }
}

export default Skills
