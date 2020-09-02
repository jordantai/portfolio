import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundSlider from "react-background-slider"
import { bgImgArray } from "../utils/background-images"
// import img from "../../content/assets/bgImg/arches.jpg"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <IntroWrapper>
          <BackgroundSlider images={bgImgArray} duration={10} transition={2} />
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <MainHeader>{header}</MainHeader>
            <main>{children}</main>
          </div>
        </IntroWrapper>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const IntroWrapper = styled.div`
  min-height: 96vh;
`

const MainHeader = styled.h1`
  background: rgba(255, 255, 255, 0.8);
  width: 70%;
  border-radius: 1rem 1rem 1rem 0;
  text-align: center;
`

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  margin: 0;
  background-color: red;
`

export default Layout
