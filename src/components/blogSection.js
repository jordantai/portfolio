import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Button from "./button"

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const PostsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    article {
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 2px;
      margin: ${rhythm(1)};
      padding: ${rhythm(0.6)};
      box-shadow: 5px 5px 9px -2px rgba(0, 0, 0, 0.75);
      color: black;
      h3 {
        color: #2a6496;
      }
      p {
        margin-bottom: 0;
      }
      small {
        color: gray;
      }
    }
    @media (max-device-width: 768px) {
      flex-direction: column;
    }
  `

  const AllPosts = ({ data }) => {
    const posts = data.allMdx.edges
    return (
      <PostsWrapper>
        {posts.map(({ node }) => {
          const { excerpt, fields, frontmatter } = node
          return (
            <article key={fields.slug}>
              <Link style={{ boxShadow: `none` }} to={`/blog${fields.slug}`}>
                <h3>{frontmatter.title}</h3>
              </Link>
              <small>{frontmatter.date}</small>
              <p>{excerpt}</p>
            </article>
          )
        })}
      </PostsWrapper>
    )
  }

  return (
    <>
      <h2
        style={{
          color: `white`,
          textAlign: `center`,
          paddingTop: `${rhythm(1)}`,
        }}
      >
        Latest from the blog...
      </h2>
      <AllPosts data={data} />
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          paddingBottom: `1rem`,
        }}
      >
        <Link to="/blog/">
          <Button background={`rgba(65, 158, 218, 1)`}>
            See all blog posts
          </Button>
        </Link>
      </div>
    </>
  )
}

export default BlogSection
