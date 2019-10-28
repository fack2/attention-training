import React, { Fragment } from "react"
import "./App.css"
import Router from "./components"
import GlobalStyle from "./components/GlobalComponent"
import BackTop from "./components/sharedComponent/BackTop/"

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BackTop />
      <Router />
    </Fragment>
  )
}

export default App
