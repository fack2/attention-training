import React from "react"
import "./App.css"
import Router from "./components"
import GlobalStyle from "./components/GlobalComponent"

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router />
    </React.Fragment>
  )
}

export default App
