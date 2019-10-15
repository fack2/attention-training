import React from "react"
import data from "../../data"
import StyledLink from "../sharedComponent/Button"
import BackButton from "../sharedComponent/BackButton"
import {
  PageWrapper,
  Header,
  Text,
  Skilldiv,
  TextDiv,
  Type
} from "./IndividualSkillStyledComponent"

class IndividualSkill extends React.Component {
  render() {
    const { id } = this.props.match.params

    return (
      <>
        <BackButton history={this.props.history}></BackButton>
        <PageWrapper>
          {data &&
            data.map(e =>
              e.id === parseInt(id) ? (
                <Skilldiv key={e.id}>
                  <Header>{e.name}</Header>
                  <Type>{e.type}</Type>
                  <li>
                    <img src={e.image} />
                  </li>
                  <TextDiv>
                    <Text>{e.description}</Text>
                  </TextDiv>
                </Skilldiv>
              ) : null
            )}

          <StyledLink
            margin="30px auto"
            width="100px"
            fontSize="20px"
            desktopmargin="664px auto"
            to="/dashboard"
          >
            Dashboard
          </StyledLink>
        </PageWrapper>
      </>
    )
  }
}
export default IndividualSkill
