import React from "react"
import { StyledCard as Card, CardWrapper } from "./style"

const DivCard = ({ info, bg, color, onClick, c }) => {
  return (
    <CardWrapper>
      <Card bg="rgb(245,245,245)" shadow_color="rgb(240,240,240)"></Card>
      <Card
        className={c}
        color={color}
        bg={bg}
        position="absolute"
        margin_top="30px;"
        scroll="true"
        width="90%"
        onClick={onClick}
      >
        {info}
      </Card>
    </CardWrapper>
  )
}
export default DivCard
