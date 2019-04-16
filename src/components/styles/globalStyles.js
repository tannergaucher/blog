import { createGlobalStyle } from "styled-components"
import * as fonts from "../../fonts"

const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: "Space Grotesk";
  src: url('${fonts.SpaceGroteskMedium}') format('woff');
  src: url('${fonts.SpaceGroteskBold}') format('woff');
 
}



html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background: papayawhip;
  font-family: "Space Grotesk";
  font-size: 22px;
}

li, p {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}



h1,h2,h3,h4,h5,h6 {

}


`

export default GlobalStyle
