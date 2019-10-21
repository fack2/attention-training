import React from "react"
import { StyledCard as Card, CardWrapper } from "./style"

const DivCard = ({ info, bg, color, onClick, c, ...props }) => {
  return (
    <CardWrapper>
      <Card
        className="card22"
        onClick={onClick}
        bg="rgb(245,245,245)"
        position="absolute"
        shadow_color="#f0f0f0"
      >
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
