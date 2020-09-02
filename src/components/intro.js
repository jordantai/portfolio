import React from "react"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const Intro = () => {
  return (
    <>
      <h1
        style={{
          background: `rgba(255, 255, 255, 0.8)`,
          ...scale(1),
          marginBottom: rhythm(1),
          width: `70%`,
          borderRadius: `1rem 0 1rem 1rem`,
          textAlign: `center`,
          marginTop: 0,
          marginLeft: rhythm(1),
        }}
      >
        A Software Developer
      </h1>
      <h2
        style={{
          background: `rgba(255, 255, 255, 0.8)`,
          ...scale(0.6),
          width: `70%`,
          marginLeft: rhythm(2),
          borderRadius: `0 1rem 1rem 1rem`,
          textAlign: `center`,
        }}
      >
        based in Greater Manchester
      </h2>
      <p
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
      </p>
    </>
  )
}

export default Intro
