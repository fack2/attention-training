import styled from 'styled-components'

const Button = styled.button`
  background: ${props => (props.primary ? 'orange' : 'blue')};
  font-size: 16px;
  border-radius: 12px;
  color: ${({ color }) => color || 'blue'};
  margin: 0 1em;
  width: ${({ width }) => width};
  padding: 0.25em 1em;
  border-style: none;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`

export default Button
