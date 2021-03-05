//--dependancies--
import React from "react"
import styled from "styled-components"

//--components--
import Layout from "../components/global/layout"

//--styles--
import { COLORS } from "../styles/colors"
import { FONT_BODY, WEIGHT } from "../styles/text"

export const Container = styled.div`
  position: ${props => (props.position ? props.position : "inherit%")};
  width: ${props => (props.width ? props.width : "100%")};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "row"};
  height: ${props => (props.height ? props.height : "100%")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "1440px")};
  background: ${props => (props.background ? props.background : "transparent")};
  color: ${props => (props.color ? props.color : "black")};
  display: ${props => (props.display ? props.display : "flex")};
  margin: ${props => (props.margin ? props.margin : "0 auto")};
  padding: ${props => (props.padding ? props.padding : "0")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${props => (props.alignItems ? props.alignItems : "flex-start")};
  ${props => (props.otherCss ? props.otherCss : "")}
`
