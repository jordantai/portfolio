import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;
`

const Navbar = () => {
  return (
    <nav>
      <NavLinks>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </NavLinks>
    </nav>
  )
}

export default Navbar
