//--dependancies--
import { createGlobalStyle } from "styled-components"

import { FONT_HEADING } from "../styles/text"
//--styled-components--
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family:${FONT_HEADING}
      }
`
export default GlobalStyle
