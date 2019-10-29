import styled from "styled-components"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
`

const DashboardCard = styled.div`
  background: white;
  border-radius: 21px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
`

const Titlewrap = styled.div`
  display: flex;
  flex-direction: row;
`

const Header = styled.h1`
  font-size: 25px;
  color: grey;
  text-align: center;
  margin-top: auto;
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
  margin-top: 38px;
  @media only screen and (min-width: 800px) {
    align-items: center;
  }
`

const RestartImg = styled.img`
  margin-bottom: -9px;
  width: 28px;
  height: 30px;
  margin-right: 4px;
`

const AboutImg = styled.img`
  margin-bottom: -9px;
  width: 30px;
  height: 30px;
  margin-right: 9px;
`

export {
  Header,
  DashboardCard,
  Title,
  Text,
  Icon,
  Titlewrap,
  PageWrapper,
  Buttuns,
  RestartImg,
  AboutImg
}
