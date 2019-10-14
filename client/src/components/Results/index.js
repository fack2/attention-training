import React, { Component } from "react"
import resultsImg from "../../assets/results.png"
import resutlsData from "../results"
import Button from "../sharedComponent/Button"

class Results extends Component {
  render () {
    const { id } = this.props.match.params
    return (
      <div>
        <h1>Results</h1>
        <img src={resultsImg} atl="results" />
        {console.log("2222", resutlsData)}
        {resutlsData.map(result =>
          result.id === parseInt(id) ? (
            <div>
              <h3>You scored highly in: {result.type}</h3>
              <p>{result.descritption}</p>
            </div>
          ) : (
            <p></p>
          )
        )}
        {console.log(
          "2222",
          resutlsData.filter(result => result.id === parseInt(id))
        )}
        <Button>Dashboard</Button>
      </div>
    )
  }
}

export default Results
