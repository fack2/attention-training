/* eslint-disable no-unused-vars */
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import CircleProgressBar from "./sharedComponent/CircleProgressBar"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/circle-progress" component={CircleProgressBar} />
      </Switch>
    </Router>
  )
}

export default Routes
