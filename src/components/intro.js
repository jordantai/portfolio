import React from "react"
import { rhythm, scale } from "../utils/typography"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { zoomInRight, zoomInLeft, zoomInUp } from "react-animations"
import styled, { keyframes, css } from "styled-components"

const zoomInRightAnimation = keyframes`${zoomInRight} 0% {visibility: hidden} 100% {visibility: visible;}`
const zoomInLeftAnimation = keyframes`${zoomInLeft} 0% {visibility: hidden} 100% {visibility: visible;}`
const zoomInUpAnimation = keyframes`${zoomInUp} 0% {visibility: hidden} 100% {visibility: visible;}`

const AnimatedHeader = styled.h2`
  animation: ${props =>
    props.right
      ? css`2s ${zoomInRightAnimation}`
      : css`2s ${zoomInLeftAnimation}`};
  animation-delay: ${props => (props.right ? css`3s` : css`4s`)};
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: ${rhythm(1)};
  width: 70%;
  text-align: center;
  visibility: hidden;
  animation-fill-mode: forwards;
`
const AnimatedP = styled.p`
  animation: 2s ${zoomInUpAnimation};
  visibility: hidden;
  animation-fill-mode: forwards;
  animation-delay: 5s;
`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`
const IconLink = ({ className, url, children }) => (
  <a className={className} href={url}>
    {children}
  </a>
)

const StyledIconLink = styled(IconLink)`
  color: white;
  &:hover {
    color: #419eda;
  }
`

const Intro = () => {
  return (
    <>
      <AnimatedHeader
        right
        style={{
          ...scale(1),
          borderRadius: `1rem 0 1rem 1rem`,
          marginTop: 0,
          marginLeft: rhythm(1),
        }}
      >
        A Software Developer
      </AnimatedHeader>
      <AnimatedHeader
        style={{
          ...scale(0.6),
          marginLeft: rhythm(2),
          borderRadius: `0 1rem 1rem 1rem`,
        }}
      >
        based in Greater Manchester
      </AnimatedHeader>
      <AnimatedP
        style={{
          background: `rgba(255, 255, 255, 0.8)`,
          ...scale(0.2),
          padding: rhythm(0.5),
          borderRadius: `1rem`,
        }}
      >
        I have recently graduated from the{" "}
        <a href="https://www.northcoders.com">Northcoders</a> Full Stack
        Developer Bootcamp and I am eager to hit the ground running and start a
        career in software development.
      </AnimatedP>
      <IconsWrapper>
        <StyledIconLink url="https://github.com/jordantai">
          <FaGithub size={`3rem`} />
        </StyledIconLink>
        <StyledIconLink url="https://linkedin.com/in/jordan-craigen">
          <FaLinkedin size={`3rem`} />
        </StyledIconLink>
        <StyledIconLink url="mailto:jordan@jordancraigen.dev">
          <FaEnvelope size={`3.3rem`} />
        </StyledIconLink>
      </IconsWrapper>
    </>
  )
}

export default Intro
