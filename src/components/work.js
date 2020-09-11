import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import crimeStatsImg from "../../content/assets/crime-stats-mcr.png"
import chickenTinderImg from "../../content/assets/chicken-tinder.png"
import smanImg from "../../content/assets/sman.png"
import KMAshworthImg from "../../content/assets/km-ashworth.png"
import ASUpholsteryImg from "../../content/assets/asupholstery.png"
import portfolioImg from "../../content/assets/portfolio.png"
import {
  SiTypescript,
  SiReact,
  SiHtml5,
  SiStyledComponents,
  SiNodeDotJs,
  SiCss3,
  SiJavascript,
  SiMaterialUi,
  SiGraphql,
  SiApollographql,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiWordpress,
  SiSass,
  SiBootstrap,
  SiAnsible,
  SiVagrant,
  SiMariadb,
  SiComposer,
  SiGrunt,
  SiGulp,
  SiGatsby,
  SiGithub,
} from "react-icons/si"
import { MdDevices } from "react-icons/md"

const blogPath = `${__PATH_PREFIX__}/blog/`

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${rhythm(12)}, 1fr));
  grid-gap: 1rem;
  padding: 0 ${rhythm(1)} 0 ${rhythm(1)};
`

const ProjectBox = styled.div`
  position: relative;
  border-radius: 2px;
  min-height: 15rem;
  box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    border-radius: 2px;
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
    div {
      background-color: white;
    }
  }
  h3 {
    &:hover {
      background-color: rgba(65, 158, 218, 1);
      color: white;
      outline: 4px solid #2a6496;
      outline-offset: -4px;
    }
  }
`
const ProjectPortfolio = styled(ProjectBox)`
  &::before {
    background-image: url(${portfolioImg});
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

const ProjectASUpholstery = styled(ProjectBox)`
  &::before {
    background-image: url(${ASUpholsteryImg});
  }
`

const ProjectInfoWrapper = styled.div`
  width: 70%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
  text-align: center;
  border-radius: 2px;
`

const ProjectTitle = styled.h3`
  z-index: 1;
  padding: ${rhythm(1)};
  margin-bottom: 0;
  color: black;
`

const TechTitle = styled.h5`
  z-index: 1;
  margin-bottom: ${rhythm(0.2)};
`

const ProjectDescription = styled(TechTitle)`
  font-weight: 500;
`

const TechInfo = ({ className, children }) => (
  <div className={className}>{children}</div>
)

const ProjectTech = styled(TechInfo)`
  z-index: 1;
  display: flex;
  color: black;
  justify-content: space-evenly;
  margin-bottom: ${rhythm(0.4)};
  &:hover {
    z-index: 1;
  }
`

const ExternalLink = ({ className, children, url }) => (
  <a className={className} href={url}>
    {children}
  </a>
)

const StyledExternalLink = styled(ExternalLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`
export const SectionTitle = styled.h2`
  text-align: center;
  padding-top: ${rhythm(1)};
`

const Work = () => {
  return (
    <>
      <SectionTitle id="work">Projects</SectionTitle>
      <ProjectsWrapper>
        <ProjectPortfolio>
          <ProjectInfoWrapper>
            <Link
              to={`${blogPath}portfolio/`}
              style={{ textDecoration: `none` }}
            >
              <ProjectTitle>This Portfolio</ProjectTitle>
            </Link>
            <ProjectDescription>My portfolio website</ProjectDescription>
            <TechTitle>Tech</TechTitle>
            <ProjectTech>
              <SiJavascript />
              <SiGatsby />
              <SiReact />
              <SiNodeDotJs />
              <SiHtml5 />
              <SiStyledComponents />
              <SiCss3 />
              <SiGraphql />
            </ProjectTech>
            <ProjectTech>
              <StyledExternalLink url="https://github.com/jordantai/portfolio">
                <SiGithub />
                Repo
              </StyledExternalLink>
            </ProjectTech>
          </ProjectInfoWrapper>
        </ProjectPortfolio>

        <ProjectCrimeStats>
          <ProjectInfoWrapper>
            <Link
              to={`${blogPath}crime-stats-mcr/`}
              style={{ textDecoration: `none` }}
            >
              <ProjectTitle>Crime Stats MCR</ProjectTitle>
            </Link>
            <ProjectDescription>
              A data visualisation site using the Police API
            </ProjectDescription>
            <TechTitle>Tech</TechTitle>
            <ProjectTech>
              <SiTypescript />
              <SiReact />
              <SiNodeDotJs />
              <SiHtml5 />
              <SiStyledComponents />
              <SiCss3 />
            </ProjectTech>
            <ProjectTech>
              <StyledExternalLink url="https://crime-stats-mcr.netlify.app/">
                <MdDevices />
                Live site
              </StyledExternalLink>
              <StyledExternalLink url="https://github.com/jordantai/crime-stats">
                <SiGithub />
                Repo
              </StyledExternalLink>
            </ProjectTech>
          </ProjectInfoWrapper>
        </ProjectCrimeStats>

        <ProjectChickenTinder>
          <ProjectInfoWrapper>
            <Link
              to={`${blogPath}chicken-tinder/`}
              style={{ textDecoration: `none` }}
            >
              <ProjectTitle>Chicken Tinder</ProjectTitle>
            </Link>
            <ProjectDescription>
              An app to help you choose which restaurant to eat at (based on a
              well known dating app).
            </ProjectDescription>
            <TechTitle>Tech</TechTitle>
            <TechTitle>Front End</TechTitle>
            <ProjectTech>
              <SiJavascript />
              <SiReact />
              <SiApollographql />
              <SiFirebase />
              <SiMaterialUi />
            </ProjectTech>
            <TechTitle>Back End</TechTitle>
            <ProjectTech>
              <SiJavascript />
              <SiNodeDotJs />
              <SiMongodb />
              <SiGraphql />
            </ProjectTech>
            <ProjectTech>
              <StyledExternalLink url="https://chicken-tinder-nc.netlify.app/">
                <MdDevices />
                Live site
              </StyledExternalLink>
              <StyledExternalLink url="https://github.com/jordantai/ChickenTinderFrontend/">
                <SiGithub />
                FE repo
              </StyledExternalLink>
              <StyledExternalLink url="https://github.com/jordantai/ChickenTinderBackend/">
                <SiGithub />
                BE repo
              </StyledExternalLink>
            </ProjectTech>
          </ProjectInfoWrapper>
        </ProjectChickenTinder>

        <ProjectSMAN>
          <ProjectInfoWrapper>
            <Link to={`${blogPath}sman/`} style={{ textDecoration: `none` }}>
              <ProjectTitle>Super Mega Awesome News</ProjectTitle>
            </Link>
            <ProjectDescription>A Reddit style news app</ProjectDescription>
            <TechTitle>Tech</TechTitle>
            <TechTitle>Front End</TechTitle>
            <ProjectTech>
              <SiJavascript />
              <SiReact />
              <SiHtml5 />
              <SiCss3 />
            </ProjectTech>
            <TechTitle>Back End</TechTitle>
            <ProjectTech>
              <SiJavascript />
              <SiNodeDotJs />
              <SiPostgresql />
            </ProjectTech>
            <ProjectTech>
              <StyledExternalLink url="https://super-mega-awesome-news.netlify.app/">
                <MdDevices />
                Live site
              </StyledExternalLink>
              <StyledExternalLink url="https://github.com/jordantai/super-mega-awesome-news/">
                <SiGithub />
                FE repo
              </StyledExternalLink>
              <StyledExternalLink url="https://github.com/jordantai/be-nc-news/">
                <SiGithub />
                BE repo
              </StyledExternalLink>
            </ProjectTech>
          </ProjectInfoWrapper>
        </ProjectSMAN>

        <ProjectKMAshworth>
          <ProjectInfoWrapper>
            <Link
              to={`${blogPath}km-ashworth/`}
              style={{ textDecoration: `none` }}
            >
              <ProjectTitle>KM Ashworth Interiors</ProjectTitle>
            </Link>
            <ProjectDescription>
              A brochure type Wordpress website for a local fabrics and
              interiors specialist
            </ProjectDescription>
            <TechTitle>Tech</TechTitle>
            <ProjectTech>
              <SiWordpress />
              <SiSass />
              <SiBootstrap />
              <SiAnsible />
              <SiVagrant />
              <SiMariadb />
              <SiComposer />
              <SiGulp />
            </ProjectTech>
            <ProjectTech>
              <StyledExternalLink url="https://kmashworth.co.uk/">
                <MdDevices />
                Live site
              </StyledExternalLink>
            </ProjectTech>
          </ProjectInfoWrapper>
        </ProjectKMAshworth>

        <ProjectASUpholstery>
          <ProjectInfoWrapper>
            <Link
              to={`${blogPath}asupholstery/`}
              style={{ textDecoration: `none` }}
            >
              <ProjectTitle>AS Upholstery</ProjectTitle>
            </Link>
            <ProjectDescription>
              A brochure type website for a local upholstery business
            </ProjectDescription>
            <TechTitle>Tech</TechTitle>
            <ProjectTech>
              <SiWordpress />
              <SiSass />
              <SiBootstrap />
              <SiGrunt />
            </ProjectTech>
            <ProjectTech>
              <StyledExternalLink url="https://asupholstery.co.uk/">
                <MdDevices />
                Live site
              </StyledExternalLink>
            </ProjectTech>
          </ProjectInfoWrapper>
        </ProjectASUpholstery>
      </ProjectsWrapper>
    </>
  )
}

export default Work
