import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import crimeStatsImg from "../../content/assets/crime-stats-mcr.png"
import chickenTinderImg from "../../content/assets/chicken-tinder.png"
import smanImg from "../../content/assets/sman.png"
import KMAshworthImg from "../../content/assets/km-ashworth.png"

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${rhythm(12)}, 1fr));
  grid-gap: 1rem;
  padding: 0 ${rhythm(1)} 0 ${rhythm(1)};
`

const ProjectBox = styled.div`
  position: relative;
  border-radius: 2px;
  min-height: 10rem;
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.4;
  }
  &:hover {
    &::before {
      opacity: 1;
    }
  }
`
const ProjectCrimeStats = styled(ProjectBox)`
  &::before {
    background-image: url(${crimeStatsImg});
  }
`

const ProjectChickenTinder = styled(ProjectBox)`
  &::before {
    background-image: url(${chickenTinderImg});
  }
`

const ProjectSMAN = styled(ProjectBox)`
  &::before {
    background-image: url(${smanImg});
  }
`

const ProjectKMAshworth = styled(ProjectBox)`
  &::before {
    background-image: url(${KMAshworthImg});
  }
`

const ProjectTitle = styled.h3`
  z-index: 1;
  background-color: rgba(65, 158, 218, 0.8);
  padding: ${rhythm(1)};
  margin-bottom: 0;
  border-radius: 2px;
  color: white;
`

const Work = () => {
  return (
    <>
      <h2>My Work</h2>
      <ProjectsWrapper>
        <ProjectCrimeStats>
          <ProjectTitle>Crime Stats MCR</ProjectTitle>
          <h5>Tech</h5>
        </ProjectCrimeStats>
        <ProjectChickenTinder>
          <ProjectTitle>Chicken Tinder</ProjectTitle>
        </ProjectChickenTinder>
        <ProjectSMAN>
          <ProjectTitle>Super Mega Awesome News</ProjectTitle>
        </ProjectSMAN>
        <ProjectKMAshworth>
          <ProjectTitle>KM Ashworth Interiors</ProjectTitle>
        </ProjectKMAshworth>
      </ProjectsWrapper>
    </>
  )
}

export default Work
