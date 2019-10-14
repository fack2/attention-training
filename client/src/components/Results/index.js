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
  render () {
    const { id } = this.props.match.params
    return (
      <Container>
        <Header>Results</Header>
        <Img src={resultsImg} atl="results" />
        {console.log("2222", resutlsData)}
        {resutlsData.map(result =>
          result.id === parseInt(id) ? (
            <TypeContainer>
              <Type>You scored highly in: {result.type}</Type>
              <Description>{result.descritption}</Description>
            </TypeContainer>
          ) : (
            <p></p>
          )
        )}
        {console.log(
          "2222",
          resutlsData.filter(result => result.id === parseInt(id))
        )}
        <Button width="180px">Dashboard</Button>
      </Container>
    )
  }
}

export default Results
