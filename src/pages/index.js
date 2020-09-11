import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Intro from "../components/intro"
import BackgroundSlider from "react-background-slider"
import { bgImgArray } from "../utils/background-images"
import Work from "../components/work"
import Skills from "../components/skills"
import BlogSection from "../components/blogSection"
import Contact from "../components/contact"
import Navbar from "../components/navbar"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <IntroWrapper>
          <BackgroundSlider images={bgImgArray} duration={10} transition={2} />
          <Intro />
        </IntroWrapper>
        <WorkWrapper>
          <Work />
        </WorkWrapper>
        <SkillsWrapper>
          <Skills />
        </SkillsWrapper>
        <BlogWrapper>
          <BlogSection />
        </BlogWrapper>
        <ContactWrapper>
          <Contact />
        </ContactWrapper>
      </Layout>
    )
  }
}

const IntroWrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  height: 95vh;
  @media (min-device-width: 1300px) {
    margin-top: -20px;
  }
`

const WorkWrapper = styled.section`
  width: 100%;
  min-height: 200px;
  background-color: white;
  padding-bottom: ${rhythm(1)};
`

const SkillsWrapper = styled.section`
  width: 100%;
  min-height: 200px;
  background-color: lightslategray;
  h2,
  h3 {
    text-align: center;
    color: #e5d99c;
  }
  h2 {
    padding-top: ${rhythm(1)};
  }
  h3 {
    padding-top: ${rhythm(1.5)};
  }
`

const BlogWrapper = styled(WorkWrapper)`
  background-color: #34404d;
`

const ContactWrapper = styled(WorkWrapper)`
  background-color: #709998;
`

export default IndexPage
