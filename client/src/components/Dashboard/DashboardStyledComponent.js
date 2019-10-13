import styled from "styled-components"

const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;

  @media only screen and (min-width: 800px) {
    margin: auto;
  }
`

const DashboardCard = styled.div`
  background: white;
  border-radius: 21px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 800px) {
    max-height: 281px;
  }
`

const Titlewrap = styled.div`
  display: flex;
  flex-direction: row;
`

const Header = styled.h1`
  font-size: 25px;
  color: grey;
  text-align: center;
`

const Icon = styled.img`
  width: 52px;
  height: 52px;
  padding: 22px;
`
const Title = styled.h3`
  font-size: 25px;
  text-align: center;
  padding-right: 59px;
`

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  @media only screen and (min-width: 800px) {
    padding: 20px;
  }
`

const Buttuns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 800px) {
  }
`

const RestartImg = styled.img`
  margin-bottom: -6px;
`

export {
  Header,
  DashboardCard,
  Title,
  Text,
  Icon,
  Titlewrap,
  PageDiv,
  Buttuns,
  RestartImg
}
