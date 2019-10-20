import React from "react"
import BackButton from "../sharedComponent/BackButton"

const AboutUs = props => {
  return (
    <div style={{ "text-align": "center" }}>
      <BackButton history={props.history} />
      <h1>About US</h1>
      <p style={{ padding: "20px", "line-height": "35px" }}>
        Attention Training is building a web and mobile platform to enable the creative thriving of individuals with
        ADHD.
      </p>
    </div>
  )
}
export default AboutUs
