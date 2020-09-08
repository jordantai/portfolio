import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import crimeStatsImg from "../../content/assets/crime-stats-mcr.png"

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${rhythm(12)}, 1fr));
  grid-gap: 1rem;
  padding: 0 ${rhythm(1)} 0 ${rhythm(1)};
`

const ProjectBox = styled.div`
  background-color: white;
  border-radius: 1rem;
  min-height: 10rem;
`

const Work = () => {
  return (
    <>
      <h2>My Work</h2>
      <ProjectsWrapper>
        <ProjectBox
          style={{
            backgroundImage: `url(${crimeStatsImg})`,
            backgroundSize: `100%`,
          }}
        >
          <h3>Crime Stats MCR</h3>
        </ProjectBox>
        <ProjectBox>
          <h3>Chicken Tinder</h3>
        </ProjectBox>
        <ProjectBox>
          <h3>Super Mega Awesome News</h3>
        </ProjectBox>
        <ProjectBox>
          <h3>KM Ashworth Interiors</h3>
        </ProjectBox>
      </ProjectsWrapper>
    </>
  )
}

export default Work
