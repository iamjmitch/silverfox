//--dependancies--
import React from "react"
import styled from "styled-components"

//--components--
import { Container } from "../../library/container"
import { StyledH1, StyledH2, StyledH3 } from "../../library/headings/headings"

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
  p.whoTextBody {
    font-family: ${FONT_HEADING};
    font-size: 1rem;
    font-weight: 600;
    text-align: justify;
    color: ${COLORS.body};
    line-height: 1.8em;
  }
`

const StyledATag = styled.a`
  text-align: left;
  text-decoration: none;
  font-family: ${FONT_HEADING};
  color: ${COLORS.orange};
  font-weight: ${WEIGHT.BOLD};
  transition: 0.3s;
  padding-left: 20px;
  &:hover {
    color: ${COLORS.body};
  }
`

const Who = () => {
  return (
    <StyledSection>
      <Container flexDirection="column" alignItems="center">
        <p className="subHeading">Who are we</p>
        <StyledH2
          padding="0 0 50px 0"
          fontSize="2.2rem"
          textTransform="none"
          color={COLORS.black}
        >
          Welcome to SilverFox
        </StyledH2>
      </Container>
      <Container>
        <Container
          padding="0 30px 0 0"
          className="whoImage"
          width="50%"
          otherCss="img{width:100%;}"
        >
          <img src="./images/services.jpg" />
        </Container>
        <Container
          padding="0 0 0 30px"
          className="whoText"
          flexDirection="column"
          width="50%"
        >
          <Container
            className="textHeading"
            otherCss="img{
            width:70px;
            height:auto}"
            alignItems="center"
            padding="0 0 20px 0"
          >
            <img src="./images/icon.svg" />
            <StyledH3
              fontWeight="700"
              lineHeight="1.3em"
              fontSize="1.8rem"
              padding="0 0 0 20px"
              textAlign="justify"
              color={COLORS.black}
            >
              Your Local Carpet Cleaning & Pest Control Experts Since 2018
            </StyledH3>
          </Container>
          <p className="whoTextBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porta pretium lacus, hendrerit pretium magna placerat et. Morbi
            turpis risus, facilisis quis enim eu, dignissim rhoncus diam. Sed ut
            congue augue, ut tincidunt eros.
            <br />
            <br />
            Nunc sem mi, viverra non condimentum quis, tincidunt vel odio.
            Pellentesque viverra risus et lacus vehicula, at porta quam
            fringilla. Sed ultricies varius elementum. Curabitur id ex ante.
          </p>
          <Container
            padding="20px 0 0 0"
            alignItems="center"
            className="facebook"
            justifyContent="flex-start"
            otherCss={`svg{width:30px; display:block;}
           `}
          >
            <svg
              width="auto"
              height="auto"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57.378 0.000999451H3.352C1.502 0.000999451 0 1.5 0 3.353V57.379C0 59.232 1.502 60.733 3.352 60.733H32.438V37.214H24.524V28.047H32.438V21.287C32.438 13.444 37.227 9.171 44.225 9.171C47.58 9.171 50.457 9.422 51.296 9.531V17.729L46.442 17.731C42.637 17.731 41.903 19.54 41.903 22.193V28.044H50.981L49.794 37.21H41.902V60.73H57.377C59.229 60.73 60.732 59.227 60.732 57.379V3.351C60.731 1.5 59.23 0.000999451 57.378 0.000999451Z"
                fill="#fe4f00"
              />
            </svg>

            <StyledATag href="#">Find Silverfox on Facebook</StyledATag>
          </Container>
        </Container>
      </Container>
    </StyledSection>
  )
}

export default Who
