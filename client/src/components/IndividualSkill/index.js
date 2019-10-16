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
  Type,
  SkillImg,
  List
} from "./IndividualSkillStyledComponent"

const IndividualSkill = props => {
  const { id } = props.match.params

  return (
    <>
      <BackButton history={props.history}></BackButton>
      <PageWrapper>
        {data &&
          data.map(e =>
            e.id === parseInt(id) ? (
              <Skilldiv key={e.id}>
                <Header>{e.name}</Header>
                <Type>{e.type}</Type>
                <List>
                  <SkillImg alt="skill" src={e.image} />
                </List>
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
          desktopmargin="auto"
          to="/dashboard"
        >
          Dashboard
        </StyledLink>
      </PageWrapper>
    </>
  )
}

export default IndividualSkill
