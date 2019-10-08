import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  background: ${props => (props.primary ? '#ED6237' : '#378BED')};
  font-size: ${({ font_size }) => font_size || '16px'};
  
  color: ${({ color }) => color || 'white'};
  margin: ${({ margin }) => margin || '1em'};
  box-shadow: 0px 10px 25px rgba(84, 104, 255, 0.3);
  border-radius: ${({ border_radius }) => border_radius || '15px'};
  padding:5%;
  display: inline-block;
  text-align: center;
  width:${({ width }) => width || '40px'}
  border-style: none;
`

export default StyledLink
