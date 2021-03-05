import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"

//--styles--
import { FONT_HEADING, WEIGHT } from "../styles/text"

//--styled-components--
export const StyledLink = styled(props => <Link {...props} />)`
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-family: ${props => (props.fontFamily ? props.fontFamily : FONT_HEADING)};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "capitalize"};
  font-weight: ${props => (props.weight ? props.weight : WEIGHT.normal)};
  color: ${props => (props.color ? props.color : "black")};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
  transition: ${props => (props.transition ? props.transition : "0.5s")};
  ${props => (props.otherCss ? props.otherCss : "")};

  &:hover {
    color: ${props => (props.hover ? props.hover : "black")};
    border-bottom: ${props =>
      props.hoverBorderBottom ? props.hoverBorderBottom : "none"};
  }
`
