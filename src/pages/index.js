//--dependancies--
import React from "react"
import styled from "styled-components"

//--components--
import Layout from "../components/global/layout"
import Nav from "../components/nav/nav"
import Hero from "../library/hero/hero"
import Who from "../components/subSections/who"
import Services from "../components/subSections/services"

//--styles--
import { COLORS } from "../styles/colors"
import { BASE_TEXT, WEIGHT } from "../styles/text"

//--styled-components--
const Test = styled.div`
  color: ${COLORS.orange};
  font-size: 2rem;
`

//--data--
const links = [
  { to: "/", text: "home" },
  { to: "/", text: "Services" },
  { to: "/", text: "Prices" },
  { to: "/", text: "Contact" },
]

const IndexPage = () => {
  return (
    <Layout>
      <Nav links={links} />
      <Hero />
      <Who />
      <Services />
    </Layout>
  )
}

export default IndexPage
