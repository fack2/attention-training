import React from "react"
import { StyledCard as Card, CardWrapper } from "./style"

const DivCard = ({ info, bg, color, onClick, className, ...props }) => {
  return (
    <CardWrapper>
      <Card className="expand-card" onClick={onClick} bg="#f0f0f" position="absolute" shadow_color="#f0f0f0">
        <p
          style={{
            textAlign: "justify",
            marginTop: "10px",
            height: "90px",
            padding: "8px 20px"
          }}
        >
          {props.question}
        </p>
        <br />
        {props.options}
      </Card>
      <Card
        className={className}
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
