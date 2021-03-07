//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--styles--
import { COLORS } from "../../styles/colors"
import { FONT_HEADING, WEIGHT } from "../../styles/text"

//--styled-components

export const StyledH1 = styled.h1`
  font-family: ${FONT_HEADING};
  color: ${props => (props.color ? props.color : COLORS.heroText)};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "1.1em")};
  font-size: ${props => (props.fontSize ? props.fontSize : "5rem")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "capitalize"};
  -webkit-text-stroke-width: ${props =>
    props.textStrokeWidth ? props.textStrokeWidth : ""};
  -webkit-text-stroke-color: ${props =>
    props.textStrokeColor ? props.textStrokeColor : ""};
`
export const StyledH2 = styled.h2`
  font-family: ${FONT_HEADING};
  color: ${props => (props.color ? props.color : "black")};
  font-size: ${props => (props.fontSize ? props.fontSize : "3rem")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "capitalize"};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  -webkit-text-stroke-width: ${props =>
    props.textStrokeWidth ? props.textStrokeWidth : ""};
  -webkit-text-stroke-color: ${props =>
    props.textStrokeColor ? props.textStrokeColor : ""};
`

export const StyledH3 = styled.h3`
  font-family: ${props => (props.fontFamily ? props.fontFamily : FONT_HEADING)};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "1.1em")};
  color: ${props => (props.color ? props.color : "black")};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  font-weight: ${props => (props.weight ? props.weight : "300")};
  font-size: ${props => (props.fontSize ? props.fontSize : "3rem")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "capitalize"};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  -webkit-text-stroke-width: ${props =>
    props.textStrokeWidth ? props.textStrokeWidth : ""};
  -webkit-text-stroke-color: ${props =>
    props.textStrokeColor ? props.textStrokeColor : ""};
`
