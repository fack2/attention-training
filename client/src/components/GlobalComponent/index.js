import { createGlobalStyle } from "styled-components"
import HKGroteskBold from "../../assets/fonts/HKGrotesk-Bold.woff"
import HKGroteskRegular from "../../assets/fonts/HKGrotesk-Regular.woff"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: HKGroteskBold;
    src: url(${HKGroteskBold}) format('woff');
    }
  @font-face {
    font-family: HKGroteskRegular;
    src: url(${HKGroteskRegular}) format('woff');
    }

a{
  font-family: HKGroteskBold;
  }
h1,h2,h3,h4,h5,h6{
 font-family: HKGroteskBold;
  }
p{
  font-family: HKGroteskRegular;
}

body,html {  
max-width:600px;
margin: auto;
padding: 0;
background: #f3f5f9;
border-left: #DCDCDC solid 1px;
border-right: #DCDCDC solid 1px;

  }
`
export default GlobalStyle
