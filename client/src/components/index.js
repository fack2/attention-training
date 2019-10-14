import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import ProgressBar from "./sharedComponent/ProgressBar"
import CircleProgressBar from "./sharedComponent/CircleProgressBar"
import Dashboard from "../components/Dashboard"
import Results from "./Results"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz-instructions" component={ProgressBar} />
        <Route
          exact
          path="/quiz"
          render={props => (
            <CircleProgressBar
              percent="50%"
              title="Good job!"
              description=" you are half way there."
              button="LET’S KEEP GOING!"
            />
          )}
        />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/results/:id" component={Results} />
      </Switch>
    </Router>
  )
}

export default Routes
