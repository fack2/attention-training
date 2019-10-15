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
import SkillImg from "./SkillsStyledComponent"

class Skills extends React.Component {
  state = {
    FilteredData: data
  }

  onClick = ({ target }) => {
    const { value } = target
    const FilteredData = data.filter(e => e.type === value)
    this.setState({ FilteredData })
  }

  render() {
    console.log(this.state)
    return (
      <PageWrapper>
        <BackButton history={this.props.history}></BackButton>
        <Header>Trainning Skills</Header>

        {/*filter*/}
        <DivStyled>
          <FilterStyled>
            <FilterButton value="everyday" onClick={this.onClick}>
              Everyday
            </FilterButton>
            <FilterButton value="superpower" onClick={this.onClick}>
              Superpower
            </FilterButton>
          </FilterStyled>
        </DivStyled>

        {this.state.FilteredData.map(e => {
          return (
            <SkillsCard key={e.id}>
              <Link to={`/skills/${e.id}`}>
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
