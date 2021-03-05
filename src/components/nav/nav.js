//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--
import { StyledLink } from "../../library/link"
import { StyledButton } from "../../library/button"
import { Container } from "../../library/container"

//--styles--
import { COLORS } from "../../styles/colors"
import { FONT_HEADING, WEIGHT } from "../../styles/text"

const StyledNav = styled(Container)`
  max-width: unset;
  padding: 0 50px;
`
const StyledLogo = styled(Container)`
  img {
    height: 25px;
    width: auto;
  }
  span {
    color: white;
    font-family: ${FONT_HEADING};
    font-size: 0.7rem;
  }
`
const StyledLinkContainer = styled(Container)``

const Nav = ({ links }) => {
  return (
    <Container
      width="100%"
      maxWidth="unset"
      background="#1b1b1b"
      padding="30px 0"
      otherCss={`border-bottom: 3px solid ${COLORS.orange};`}
    >
      <StyledNav width="100%" justifyContent="center" alignItems="center">
        <StyledLogo justifyContent="center" alignItems="center">
          <Container justifyContent="center" alignItems="center">
            <Container
              width="auto"
              otherCss="img{width:50px!important; height: 50px!important;}"
              padding="0 10px 0 0"
            >
              <img src="./images/fox.png" />
            </Container>
            <Container flexDirection="column">
              <Link to="/">
                <img src="./images/logo.png" />
              </Link>
              <span>Carpet Cleaning & Pest Control</span>
            </Container>
          </Container>
        </StyledLogo>
        <StyledLinkContainer justifyContent="center" alignItems="center">
          {links.map(link => (
            <StyledLink
              key={link.text}
              to={link.to}
              margin="0 2.4em"
              padding="5px 2px"
              fontSize="1rem"
              color={COLORS.white}
              hover="grey"
              otherCss="border-bottom: 2px solid transparent"
              hoverBorderBottom={`2px solid ${COLORS.orange}`}
            >
              {link.text}
            </StyledLink>
          ))}
        </StyledLinkContainer>
        <Container justifyContent="flex-end">
          <StyledButton
            padding="0.9em 2em"
            weight="500"
            borderRadius="30px"
            background={COLORS.orange}
            border={`2px solid transparent`}
            color={COLORS.white}
            hoverColor={COLORS.grey}
            hoverBackground="transparent"
            hoverBorder={`2px solid ${COLORS.orange}`}
          >
            Free Quote
          </StyledButton>
        </Container>
      </StyledNav>
    </Container>
  )
}

export default Nav
