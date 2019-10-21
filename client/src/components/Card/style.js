import { Card } from "antd"
import styled from "styled-components"
import React from "react"
const StyledCard = styled(Card)`
  background-size: cover !important;
  background: ${({ bg }) => bg || "#fff"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "#000"};
  margin-top: ${({ margin_top }) => margin_top || "10px"};
  position: ${({ position }) => position || "unset"};
  box-shadow: -0px -7px ${({ shadow_color }) => shadow_color || "#eee"};
  border: solid 0.1em #ddd;
  border-radius: 15px;
  padding-top: 10px;
  text-align: center;
  width: ${({ width }) => width || "80%"};
  height: 79vh;
  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "unset")};
`
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const CardsAnimation = ({ direction }) => {
  return (
    <style>
      {`

      .card22 {
        animation: mymove2 2s;
        animation-fill-mode: forwards;
      }

      @keyframes mymove2 {
        0% {
          margin-top: 10px;
          width: 80%;
          background: #f0f0f;
        }

        100% {
          margin-top: 30px;
          width: 90%;
          background: #fff;
        }
      }

      .aaa {
        animation: mymove 3s;
        animation-fill-mode: forwards;
      }

      @keyframes mymove {
        0% {
          ${direction}: 0px;
        }

        100% {
          ${direction}: 1000px;
        }
      }
`}
    </style>
  )
}

export { StyledCard, CardWrapper, CardsAnimation }
