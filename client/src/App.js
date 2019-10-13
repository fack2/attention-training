import React, { Fragment } from "react"
import "./App.css"
import Router from "./components"
import GlobalStyle from "./components/GlobalComponent"

function App () {
  return (
    <Fragment>
      <GlobalStyle />
      <Router />
    </Fragment>
  )
}

export default App
