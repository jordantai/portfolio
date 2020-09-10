import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { IoIosPerson } from "react-icons/io"
import { FaEnvelope, FaMobileAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import { SectionTitle } from "./work"

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  li,
  a {
    display: flex;
    align-items: center;
  }
  a {
    color: inherit;
    &:hover {
      color: whitesmoke;
    }
  }
  svg {
    margin-right: 5px;
  }
  @media (max-device-width: 440px) {
    flex-direction: column;
  }
`

const Contact = () => {
  return (
    <>
      <SectionTitle id="contact">Contact</SectionTitle>
      <ContactList>
        <li>
          <IoIosPerson />
          Jordan Craigen
        </li>
      </ContactList>
      <ContactList>
        <li>
          <a href="mailto:jordan@jordancraigen.dev">
            <FaEnvelope />
            jordan@jordancraigen.dev
          </a>
        </li>
        <li>
          <FaMobileAlt />
          07590488993
        </li>
      </ContactList>
      <ContactList>
        <li>
          <a href="https://linkedin.com/in/jordan-craigen">
            <FaLinkedin />
            https://linkedin.com/in/jordan-craigen
          </a>
        </li>
        <li>
          <a href="https://github.com/jordantai">
            <FaGithub />
            https://github.com/jordantai
          </a>
        </li>
      </ContactList>
    </>
  )
}

export default Contact
