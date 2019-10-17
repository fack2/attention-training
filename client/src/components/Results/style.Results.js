import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h3`
  font-size: 28px;
  margin-bottom: 8px;
  margin-top: 32px;
`

const TypeContainer = styled.div`
  width: 90%;
  max-width: 332px;
  min-width: 275px;
  hyphens: auto;
  margin: 0 auto;
`

const Img = styled.img`
  width: 100%;
`

const Type = styled.h4`
  font-size: 21px;
  text-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
`

const Description = styled.p`
  font-size: 19px;
  opacity: 0.8;
`

export { Container, Header, TypeContainer, Img, Type, Description }
