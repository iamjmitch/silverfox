//--dependancies--
import React from "react"
import styled from "styled-components"

//--components--
import GlobalStyle from "../../styles/globalStyles"

//--styled-components--
const StyledLayout = styled.div``

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      {children}
    </StyledLayout>
  )
}

export default Layout
