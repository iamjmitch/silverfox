//--dependancies--
import styled from "styled-components"

//--styles--
import { FONT_HEADING, WEIGHT } from "../styles/text"

//--styled-components

export const StyledButton = styled.button`
  cursor: pointer;
  width: ${props => (props.width ? props.width : "auto")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  font-family: ${props => (props.fontFamily ? props.fontFamily : FONT_HEADING)};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "0")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "capitalize"};
  font-weight: ${props => (props.weight ? props.weight : WEIGHT.normal)};
  color: ${props => (props.color ? props.color : "black")};
  background: ${props => (props.background ? props.background : "red")};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};

  transition: ${props => (props.transition ? props.transition : "0.5s")};
  &:hover {
    color: ${props => (props.hoverColor ? props.hoverColor : "black")};
    background: ${props =>
      props.hoverBackground ? props.hoverBackground : "black"};
    border: ${props => (props.hoverBorder ? props.hoverBorder : "none")};
  }
`
