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

const Basicdiv = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

const Header = styled.h1`
  font-size: 25px;
  color: black;
  text-align: center;
`

const TextDiv = styled.div`
  width: 90%;
  max-width: 800px;
  min-width: 275px;
  hyphens: auto;
  margin: 0 auto;
`

const Text = styled.div`
  font-size: 19px;
  opacity: 0.8;
`

const BasicImg = styled.img`
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

export { PageWrapper, Basicdiv, Header, Text, TextDiv, BasicImg, List }
