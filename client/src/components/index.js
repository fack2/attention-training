import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import CircleProgressBar from "./sharedComponent/CircleProgressBar"
import Quiz from "./QuizPage"
import Dashboard from "./Dashboard"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route
          exact
          path="/quiz50"
          render={props => (
            <CircleProgressBar
              percent="50%"
              title="Good job!"
              description=" you are half way there."
              // pass button name as a props
              button="LET’S KEEP GOING!"
            />
          )}
        />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default Routes
