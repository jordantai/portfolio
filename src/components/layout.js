import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import "../styles/global.css"
import { rhythm, scale } from "../utils/typography"
import { zoomInLeft } from "react-animations"
import Navbar from "../components/navbar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      // home and blog
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
      // Article header
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
        <Navbar />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            paddingTop: `${rhythm(1)}`,
          }}
        >
          <MainHeader>{header}</MainHeader>
        </div>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} Jordan Craigen
          {` `}
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const zoomInLeftAnimation = keyframes`${zoomInLeft} 0% {visibility: hidden} 100% {visibility: visible;}`

const MainHeader = styled.h1`
  background: rgba(255, 255, 255, 0.8);
  width: 70%;
  border-radius: 1rem 1rem 1rem 0;
  text-align: center;
  animation: 1s ${zoomInLeftAnimation};
  visibility: hidden;
  animation-fill-mode: forwards;
  @media (max-device-width: 768px) {
    margin-left: ${rhythm(0.7)};
  }
`

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  margin: 0;
  background-color: #cad8e5;
`

export default Layout
