import styled from "styled-components"

const SkillImg = styled.img`
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  width: 100%;
  max-height: 203px;
  min-height: 125px;
  height: 125px;
  @media only screen and (min-width: 600px) {
    height: 205px;
  }
`

export default SkillImg
