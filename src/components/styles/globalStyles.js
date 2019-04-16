import { createGlobalStyle } from "styled-components"
import * as fonts from "../../fonts"

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Space Grotesk";
  src: url('${fonts.SpaceGroteskMedium}') format('woff');
}



html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background: #fff;
  font-family: "Space Grotesk";
  
}


`

export default GlobalStyle
