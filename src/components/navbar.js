import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  li {
    background-color: rgba(65, 158, 218, 0.8);
    margin: ${rhythm(0.2)};
    padding: ${rhythm(0.2)};
    border-radius: 4rem;
    a {
      color: white;
    }
    &:hover {
      background-color: #2a6496;
    }
  }
`
const rootPath = `${__PATH_PREFIX__}/`

const Navbar = ({ location }) => {
  const page = location.pathname

  return (
    <nav>
      <NavLinks>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href={page === rootPath ? "#work" : "/#work"}>Work</a>
        </li>
        <li>
          <a href={page === rootPath ? "#skills" : "/#skills"}>Skills</a>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <a href={page === rootPath ? "#contact" : "/#contact"}>Contact</a>
        </li>
      </NavLinks>
    </nav>
  )
}

export default Navbar
