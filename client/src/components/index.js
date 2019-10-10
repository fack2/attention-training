import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import CircleProgressBar50 from "./ProgressBar50%"
import ProgressBar from "./sharedComponent/ProgressBar"
import Card from './Card'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/circle-progress-half" component={CircleProgressBar50} />
        <Route exact path="/quiz-instructions" component={ProgressBar} />
      </Switch>
    </Router>
  )
}

export default Routes
