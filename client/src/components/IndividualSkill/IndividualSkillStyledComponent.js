import styled from "styled-components"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  list-style-type: none;

  @media only screen and (min-width: 800px) {
    margin: auto;
    text-align: center;
  }
`

const Skilldiv = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  list-style-type: none;

  @media only screen and (min-width: 800px) {
    max-height: 281px;
  }
`

const Header = styled.h1`
  font-size: 25px;
  color: black;
  text-align: center;
  padding-top: 29px;
`

const TextDiv = styled.div`
  width: 90%;
  max-width: 332px;
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
`

export { PageWrapper, Skilldiv, Header, Text, TextDiv, Type }
