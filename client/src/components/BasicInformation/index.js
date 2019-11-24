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
    window.scrollTo(0, 0);

  return (
    <PageWrapper>
      <BackButton history={history}></BackButton>
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
