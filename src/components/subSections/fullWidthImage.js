//--dependancies--
import React from "react"
import styled from "styled-components"

//--components--
import { Container } from "../../library/container"
import { StyledH3 } from "../../library/headings/headings"

//--styles--
import { COLORS } from "../../styles/colors"

//--styled-components
const StyledContainer = styled(Container)`
  background: url(./images/fpi.jpg);
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-top: 100px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
`
const ImageContainer = styled(Container)`
  margin-top: 100px;
  img {
    width: 110px;
    background: white;
    border-radius: 50%;
    background: ${COLORS.white};
  }
`
const StyledSpan = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #0000004a;
  z-index: ;
`

const FullWithImage = () => {
  return (
    <StyledContainer width="100%" height="80vh" position="relative">
      <StyledSpan />
      <Container
        flexDirection="column"
        height="auto"
        alignItems="center"
        otherCss="z-index:1; h3{letter-spacing:0.1em;}"
      >
        <ImageContainer>
          <img src="./images/fox.png" />
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

export default FullWithImage
