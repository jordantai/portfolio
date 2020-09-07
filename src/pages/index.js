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

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hi, I'm Jordan"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        {/* <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link> */}
        <IntroWrapper>
          <BackgroundSlider images={bgImgArray} duration={10} transition={2} />
          <Intro />
        </IntroWrapper>
        <WorkWrapper></WorkWrapper>
      </Layout>
    )
  }
}

const IntroWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
`

const WorkWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: grey;
`

export default IndexPage
