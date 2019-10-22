import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body,html {
    font-family: HKGrotesk;
    margin:0;
    padding:0;
    background: #f3f5f9;
     @media only screen and (min-width: 800px) {
       width:800px;
    border-left:#DCDCDC solid 1px;
    border-right:#DCDCDC solid 1px; 
    margin: auto;
  }
  }
`
export default GlobalStyle
