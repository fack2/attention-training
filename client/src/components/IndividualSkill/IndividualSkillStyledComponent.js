import styled from "styled-components"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  list-style-type: none;
  @media only screen and (min-width: 800px) {
    margin: auto;
  }
`

const Skilldiv = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

const Header = styled.h1`
  font-size: 25px;
  color: black;
  text-align: center;
  margin-top: auto;
`

const TextDiv = styled.div`
  width: 90%;
  max-width: 500px;
  min-width: 275px;
  hyphens: auto;
  margin: 0 auto;
`

const Text = styled.p`
  font-size: 19px;
  opacity: 0.8;
`

const Type = styled.p`
  text-align: center;
  font-size: 15px;
  color: silver;
  margin-top: auto;
`

const SkillImg = styled.img`
  align-items: center;
  min-width: 288px;
  max-width: 500px;
  width: 75%;
`

const List = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 800px) {
    align-items: center;
  }
`

export { PageWrapper, Skilldiv, Header, Text, TextDiv, Type, SkillImg, List }
