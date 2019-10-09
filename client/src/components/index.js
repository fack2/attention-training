import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import ProgressBar from "./sharedComponent/ProgressBar"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/progress" component={ProgressBar} />
      </Switch>
    </Router>
  )
}

export default Routes
