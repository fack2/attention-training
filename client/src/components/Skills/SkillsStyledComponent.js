import styled from "styled-components"

const SkillImg = styled.img`
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  width: 100%;
`

const Paragraph = styled.p`
  font-size: 12px;
  text-align: center;
  color: #454545;
`

export { SkillImg, Paragraph }
