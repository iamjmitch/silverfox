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
      ul{
        list-style-type:none;
        padding-inline-start: 10px;
        margin-block-start: 0;
        margin-block-end: 0;
       margin-inline-start: 0;
       margin-inline-end: 0;
    
      }
`
export default GlobalStyle
