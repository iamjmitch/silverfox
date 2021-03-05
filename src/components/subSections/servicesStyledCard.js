//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--
import { Container } from "../../library/container"

//--styles--
import { COLORS } from "../../styles/colors"
import { FONT_HEADING, FONT_BODY, WEIGHT } from "../../styles/text"

//--styled-components

const StyledCard = styled(Container)`
  -webkit-box-shadow: 5px 9px 20px 2px #dadadaa1;
  box-shadow: 5px 9px 20px 2px #dadadaa1;
  border: 1px solid #dadadaa1;
  padding: 20px;
  border-radius: 10px;
  .image {
    width: 95%;
    margin: 0 auto;
    border-radius: 10px;
  }
  p {
    padding-top: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${props => (props.color ? COLORS.orange : COLORS.body)};
    text-align: center;
    letter-spacing: 0.1em;
  }
  .tick {
    width: 60px;
    margin-top: -30px;
    background: white;
    border-radius: 50%;
  }
`

const Card = ({ image, text1, text2, color }) => {
  return (
    <StyledCard
      width="300px"
      flexDirection="column"
      color={color}
      alignItems="center"
    >
      <Container className="servicesPhoto">
        <img className="image" src={`./images/${image}`} />
      </Container>
      <img className="tick" src="./images/checked.svg" />
      <Container className="servicesText">
        <p>
          {text1} <br /> {text2}
        </p>
      </Container>
    </StyledCard>
  )
}

export default Card
