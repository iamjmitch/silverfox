//--dependancies--
import React, { useState } from "react"
import styled from "styled-components"

//--components--
import { Container } from "../container"
import { StyledH3 } from "../headings/headings"
import { StyledButton } from "../button"

//--styles--
import { COLORS } from "../../styles/colors"
import { FONT_BODY, FONT_HEADING, WEIGHT } from "../../styles/text"

//--styled-components
const StyledFormContainer = styled(Container)`
  background: white;
  padding-top: 200px;
  z-index: 100;
  border-radius: 20px;
  overflow: hidden;
`

const FormContainer = styled.div`
  width: 70%;
  padding: 0px 30px;
`

const InputContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  box-sizing: border-box;
  input,
  select,
  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${COLORS.grey};
    padding: 5px 0;
    font-size: 1rem;
    box-sizing: border-box;
    text-transform: unset;
  }
  input {
    padding: 3px;
  }
  label {
    color: ${COLORS.orange};
    font-weight: 500;
    font-size: 1rem;
    padding-bottom: 5px;
    padding-left: 3px;
  }
`

const StyledForm = styled.form``

const FormLine = styled(Container)`
  flex-direction: row;
`

const FormWithImage = () => {
  const [formText, setFormText] = useState("SEND")
  const [isBot, setIsBot] = useState(false)
  const handleSubmit = event => {
    event.preventDefault()
    setFormText("SENDING...")
    //get form
    let contactForm = document.querySelector("#contactForm")
    //get value of the message textbox
    let messageData = document.querySelector("#message").value
    //get value of the honeypot question
    let honeyPVal = document.querySelector("#honey")
    const formData = new FormData(contactForm)

    //function to handle the sending of form on successful validation
    const handleSend = () => {
      fetch(contactForm.getAttribute("action"), {
        method: "POST",
        headers: {
          Accept: "application/x-www-form-urlencoded;charset=UTF-8",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(formData).toString(),
      }).then(res => {
        if (res) {
          setTimeout(function () {
            setFormText("MESSAGE SENT")
          }, 2000)

          setTimeout(function () {
            setIsBot(false)
          }, 7000)
          setTimeout(function () {
            contactForm.reset()
          }, 7000)
          setTimeout(function () {
            setFormText("SEND")
          }, 7000)
        }
      })
    }

    if (
      //if the message box contains any sort of link to a website, validation will fail and ask to prove if human. Capture Question is image
      messageData.includes("http") ||
      messageData.includes(".com") ||
      messageData.includes("www.")
    ) {
      // triggers the initial bot check box
      if (!isBot) {
        setIsBot(true)
        setFormText("Please Prove You Are Human")
        // currently hard coded Question Answer. may make it slightly more challenging based on success rate of blocking bots
      } else if (honeyPVal.value === "4" || honeyPVal.value === 4) {
        handleSend()
      } else {
        setFormText("Try Again")
      }
    } else {
      handleSend()
    }
  }

  return (
    <StyledFormContainer>
      <FormContainer>
        <StyledH3
          fontSize="1.5rem"
          weight={WEIGHT.NORMAL}
          textAlign="left"
          padding="0 0 20px 10px"
        >
          Get a Free Quote
        </StyledH3>
        <StyledForm
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          action="/"
          id="contactForm"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <FormLine>
            <InputContainer>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </InputContainer>
          </FormLine>
          <FormLine>
            <InputContainer>
              <label htmlFor="phone">Phone</label>
              <input type="phone" name="phone" id="phone" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="service">Service Required</label>
              <select name="service" id="service">
                <option value="Carpet_Cleaning">Carpet Cleaning</option>
                <option value="Pest_Control">Pest Control</option>
                <option value="Both">Carpet Cleaning & Pest Control</option>
              </select>
            </InputContainer>
          </FormLine>
          <FormLine>
            <InputContainer>
              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="time">Time</label>
              <select name="time" id="time" required>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="no_preference">No Preference</option>
              </select>
            </InputContainer>
          </FormLine>

          <InputContainer>
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="10" id="message" required></textarea>
          </InputContainer>
          <ul className="actions">
            {isBot && (
              <li>
                <Container
                  background="transparent"
                  justifyContent="flex-start"
                  padding="0 0 10px 0"
                >
                  <img
                    style={{
                      width: "63px",
                      paddingBottom: "5px",
                      marginRight: "5px",
                    }}
                    src="./images/captcha.png"
                  />
                  <input required type="text" id="honey" name="honey" />
                </Container>
              </li>
            )}
            <li>
              <StyledButton
                type="submit"
                className="button"
                background={COLORS.orange}
                padding="20px 50px"
                color={COLORS.white}
                weight="500"
                hoverBackground={COLORS.grey}
              >
                {formText}
              </StyledButton>
            </li>
          </ul>
        </StyledForm>
      </FormContainer>
      <Container
        width="30%"
        flexDirection="column"
        otherCss="img{width: 100%; border-top-right-radius:20px;}"
      >
        <img src="./images/contact.jpg" />
        <Container
          background={COLORS.orange}
          padding="30px 25px"
          otherCss="color:white; font-size:1.2rem;font-weight:500; box-sizing:border-box; text-align:center;"
        >
          SilverFox is trusted by over 200+ Customers
        </Container>
      </Container>
    </StyledFormContainer>
  )
}

export default FormWithImage
