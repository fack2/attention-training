import React from "react"
import img from "../../assets/page-not-found.jpg"
import StyledLink from "../sharedComponent/Button"
import { Status, StatusMessage, NotFoundContainer } from "./style.NotFound"

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Status>404</Status>
      <StatusMessage>Oops! Page not found</StatusMessage>
      <StyledLink width="111px" font-size="" margin="30px auto" to="/dashboard">
        Dashboard
      </StyledLink>
    </NotFoundContainer>
  )
}

export default NotFound
