import { createGlobalStyle } from "styled-components"
import * as fonts from "../../fonts"

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Space Grotesk";
  src: url('${fonts.SpaceGroteskRegular}') format('woff');
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

 p {
  line-height: 1.667;
}

a {
  color: blue;
}
`

export default GlobalStyle
