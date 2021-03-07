//--dependancies--
import React from "react"
import styled from "styled-components"

//--components--
import { Container } from "../container"
import { StyledH3 } from "../headings/headings"

//--styles--
import { COLORS } from "../../styles/colors"

//--styled-components
const StyledContainer = styled(Container)`
  min-height: 470px;
  background: url(./images/fpi.jpg);
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-top: 100px;
  z-index: -1;
`
const ImageContainer = styled(Container)`
  img {
    width: 110px;
  }
`
const StyledSpan = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #0000004a;
  z-index: 1;
`

const FullWidthImageWithTextNoButton = () => {
  return (
    <StyledContainer width="100%" height="60vh" position="relative">
      <StyledSpan />
      <Container
        flexDirection="column"
        alignItems="center"
        otherCss="z-index:1; h3{letter-spacing:0.1em;}"
      >
        <ImageContainer height="auto">
          <img src="./images/foxsolid.png" />
        </ImageContainer>
        <StyledH3
          fontWeight="800"
          color="white"
          margin="50px 0 0 0"
          lineHeight="1.5em"
        >
          Trust SilverFox to Keep Your Home
          <br /> and Your Family Safe
        </StyledH3>
      </Container>
    </StyledContainer>
  )
}

export default FullWidthImageWithTextNoButton
