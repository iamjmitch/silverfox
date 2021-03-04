//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--
import HeroContents from "./heroContents"

//--styles--
import { Container } from "../container"

const StyledHero = styled(Container)`
  background: url("./images/hero.jpg");
  background-position: 0 70%;
  background-size: cover;
`

const Hero = () => {
  return (
    <StyledHero width="100%" height="calc(95vh - 115px)" maxWidth="unset">
      <HeroContents />
    </StyledHero>
  )
}

export default Hero
