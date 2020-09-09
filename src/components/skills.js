import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
  SiGraphql,
  SiReact,
  SiGatsby,
  SiStyledComponents,
  SiNodeDotJs,
  SiMaterialUi,
  SiWordpress,
  SiNpm,
  SiGit,
  SiYarn,
  SiBitbucket,
  SiBootstrap,
} from "react-icons/si"

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  li {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.3rem;
    }
  }
`

const Skills = () => {
  return (
    <>
      <h2>Skills</h2>
      <h3>Languages</h3>
      <ListWrapper>
        <li>
          <SiTypescript /> TypeScript
        </li>
        <li>
          <SiJavascript /> JavaScript
        </li>
        <li>
          <SiNodeDotJs /> Node.js
        </li>
        <li>
          <SiHtml5 />
          HTML5
        </li>
        <li>
          <SiPostgresql />
          PostgreSQL
        </li>
        <li>
          <SiGraphql />
          GraphQL
        </li>
      </ListWrapper>
      <h3>Frameworks and Libraries</h3>
      <ListWrapper>
        <li>
          <SiReact /> React
        </li>
        <li>
          <SiGatsby /> Gatsby
        </li>
        <li>
          <SiStyledComponents /> Styled Components
        </li>
        <li>Express</li>
        <li>
          <SiMaterialUi /> Material UI
        </li>
        <li>
          <SiWordpress /> Wordpress
        </li>
        <li>
          <SiBootstrap /> Bootstrap
        </li>
      </ListWrapper>
      <h3>Tools</h3>
      <ListWrapper>
        <li>
          <SiNpm /> NPM
        </li>
        <li>
          <SiGit /> Git
        </li>
        <li>
          <SiYarn /> Yarn
        </li>
        <li>
          <SiBitbucket /> Bitbucket
        </li>
      </ListWrapper>
    </>
  )
}

export default Skills
