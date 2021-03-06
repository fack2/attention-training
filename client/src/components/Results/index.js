import React, { Component, Fragment } from "react"
import resultsImg from "../../assets/results.png"
import resutlsData from "../resultsData"
import Button from "../sharedComponent/Button"
import { Container, Header, TypeContainer, Img, Type, Description, SkillsLink } from "./style.Results"
import BackButton from "../sharedComponent/BackButton"

class Results extends Component {
  calId() {
    return localStorage.getItem("inattentionScore") > 12 && localStorage.getItem("hyperactivityScore") > 12
      ? 3 /* id=3 --- '/result/3' */
      : localStorage.getItem("inattentionScore") > 12
      ? 1 /* id=1 --- '/result/1' */
      : localStorage.getItem("hyperactivityScore") > 12
      ? 2 /* id=2 --- '/result/2' */
      : 4 /* id=4 --- '/result/4' */
  }

  random() {
    return Math.floor(Math.random() * 6 + 1)
  }

  render() {
    const id = this.calId()
    return (
      <Fragment>
        <BackButton position="absolute" margin="22px" history={this.props.history}></BackButton>
        <Container>
          <Header>Result</Header>
          <backTop />
          <Img src={resultsImg} atl="results" />
          {resutlsData &&
            resutlsData.map(result =>
              result.id === parseInt(id) ? (
                <TypeContainer key={result.id}>
                  <Type>You scored highly in: {result.type}</Type>
                  <Description>{result.descritption}</Description>
                </TypeContainer>
              ) : null
            )}
          <SkillsLink to={`/skills/${this.random()}`}>See what might work for you</SkillsLink>
          {this.props.location.state && this.props.location.state.flag ? (
            <Button to="/dashboard" width="180px">
              Dashboard
            </Button>
          ) : null}
        </Container>
      </Fragment>
    )
  }
}

export default Results
