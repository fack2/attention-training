import React, { Component } from "react"
import resultsImg from "../../assets/results.png"
import resutlsData from "../resultsData"
import Button from "../sharedComponent/Button"
import { Container, Header, TypeContainer, Img, Type, Description } from "./style.Results"

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

  render() {
    // const { id } = this.props.match.params
    const id = this.calId()
    return (
      <Container>
        <Header>Results</Header>
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
        <Button to="/dashboard" width="180px">
          Dashboard
        </Button>
      </Container>
    )
  }
}

export default Results
