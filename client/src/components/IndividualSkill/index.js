import React from "react"
import data from "../../data"
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
    <PageWrapper>
      <BackButton history={props.history}></BackButton>
      {data &&
        data.map(e =>
          e.id === parseInt(id) ? (
            <Skilldiv key={e.id}>
              <Header>{e.title}</Header>
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
    </PageWrapper>
  )
}

export default IndividualSkill
