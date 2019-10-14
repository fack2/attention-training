import React from 'react'
import img from '../../assets/page-not-found.jpg'
import Button from '../sharedComponent/Button'
import { Status, StatusMessage } from './style.NotFound'

const NotFound = () => {
  return (
    <div>
      <Status>404</Status>
      <StatusMessage>Oops! Page not found</StatusMessage>
      <Button width="150px" margin="auto">
        Dashboard
      </Button>
    </div>
  )
}

export default NotFound
