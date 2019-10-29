import React from "react"
import Basic from "../../Basic"
import {
  PageWrapper,
  Basicdiv,
  Header,
  Text,
  BasicImg,
  List,
  TextDiv
} from "./BasicInformationStyledComponent"
import BackButton from "../sharedComponent/BackButton"

const BasicInformation = ({ history }) => {
  return (
    <PageWrapper>
      <BackButton margin="9px 14px 3px -150px" history={history}></BackButton>
      {Basic.map(e => {
        return (
          <Basicdiv key={e.id}>
            <Header>{e.title}</Header>
            <List>
              <BasicImg alt="basic" src={e.img} />
            </List>
            <TextDiv>
              <Text>{e.description} </Text>
            </TextDiv>
          </Basicdiv>
        )
      })}
    </PageWrapper>
  )
}

export default BasicInformation
