import React from "react"
import BackButton from "../sharedComponent/BackButton"
import { Link } from "react-router-dom"
import data from "../../data"
import {
  Header,
  DashboardCard as SkillsCard,
  Text,
  PageWrapper
} from "../Dashboard/DashboardStyledComponent"
import { FilterButton, DivStyled, FilterStyled } from "./FilterStyledComponent"
import { SkillImg, Paragraph } from "./SkillsStyledComponent"

class Skills extends React.Component {
  state = {
    FilteredData: "",
    flag: 0
  }

  onClick = ({ target }) => {
    this.setState({ flag: 1 })
    const { value } = target
    const FilteredData = data.filter(e => e.type === value)
    this.setState({ FilteredData })
  }
  render() {
    return (
      <PageWrapper>
        <BackButton history={this.props.history}></BackButton>
        <Header>Upskill yourself</Header>
        <Paragraph>
          Learn how to make life better with one of our proven coping skills
        </Paragraph>

        {/*filter*/}

        <DivStyled>
          <FilterStyled>
            <FilterButton
              borderRaduis="left"
              value="everyday"
              onClick={this.onClick}
            >
              Everyday
            </FilterButton>
            <FilterButton
              borderRaduis="right"
              value="superpower"
              onClick={this.onClick}
            >
              Superpower
            </FilterButton>
          </FilterStyled>
        </DivStyled>

        {this.state.flag === 0
          ? data.map(e => {
              if (e.type === "everyday") {
                return (
                  <SkillsCard key={e.id}>
                    <Link
                      style={{ width: "100%", "text-decoration": "none " }}
                      to={`/skills/${e.id}`}
                    >
                      <SkillImg src={e.image} />
                      <Text>{e.name} </Text>
                    </Link>
                  </SkillsCard>
                )
              }
            })
          : this.state.FilteredData &&
            this.state.FilteredData.map(e => {
              return (
                <SkillsCard key={e.id}>
                  <Link
                    style={{ width: "100%", "text-decoration": "none " }}
                    to={`/skills/${e.id}`}
                  >
                    <SkillImg src={e.image} />
                    <Text>{e.name} </Text>
                  </Link>
                </SkillsCard>
              )
            })}
      </PageWrapper>
    )
  }
}

export default Skills
