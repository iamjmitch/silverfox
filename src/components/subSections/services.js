//--dependancies--
import React from "react"
import styled from "styled-components"

//--components--
import { Container } from "../../library/container"
import { StyledH1, StyledH2, StyledH3 } from "../../library/headings/headings"
import Card from "./servicesStyledCard"

//--styles--
import { COLORS } from "../../styles/colors"
import { FONT_HEADING, FONT_BODY, WEIGHT } from "../../styles/text"

//--styled-components
const StyledSection = styled.section`
  padding: 100px 0;
  max-width: 1440px;
  margin: 0 auto;
  p.subHeading {
    font-family: ${FONT_BODY};
    font-weight: ${WEIGHT.BOLD};
    color: ${COLORS.orange};
    margin: 0;
    padding: 0;
    border-bottom: 2px solid ${COLORS.orange};
  }
`

const Services = () => {
  return (
    <StyledSection>
      <Container flexDirection="column" alignItems="center">
        <p className="subHeading">Our Services</p>
        <StyledH2
          padding="0 0 50px 0"
          fontSize="2.2rem"
          textTransform="none"
          color={COLORS.black}
        >
          How Can We Help You?
        </StyledH2>
      </Container>
      <Container>
        <Card image="services1.jpg" text1="Carpet" text2="Cleaning" />
        <Card
          image="services2.jpg"
          text1="Stain"
          text2="Removal"
          color={true}
        />
        <Card image="services3.jpg" text1="Pest" text2="Control" />
      </Container>
    </StyledSection>
  )
}

export default Services
