import { createGlobalStyle } from "styled-components"
import HKGrotesk from '../../assets/fonts/HKGrotesk-Regular.woff'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: HKGrotesk;
  src: url('${HKGrotesk}') format('woff');
}
  body,html {
    font-family: HKGrotesk;
    margin:0;
    padding:0;
    background:#F3F5F9;
  }
`
export default GlobalStyle
