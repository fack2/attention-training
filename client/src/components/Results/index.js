import React, { Component } from "react"
import resultsImg from "../../assets/results.png"
import resutlsData from "../resultsData"
import Button from "../sharedComponent/Button"
import {
  Container,
  Header,
  TypeContainer,
  Img,
  Type,
  Description
} from "./style.Results"

class Results extends Component {
  render() {
    const { id } = this.props.match.params
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
