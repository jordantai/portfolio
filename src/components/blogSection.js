// import React from "react"

import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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

  const AllPosts = ({ data }) => {
    const posts = data.allMdx.edges
    return (
      <div>
        {posts.map(({ node }) => {
          const { excerpt, fields, frontmatter } = node
          return (
            <article key={fields.slug}>
              <Link style={{ boxShadow: `none` }} to={`/blog${fields.slug}`}>
                <h4>{frontmatter.title}</h4>
              </Link>
              <small>{frontmatter.date}</small>
              <p>{excerpt}</p>
            </article>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <h2>From the blog...</h2>
      <AllPosts data={data} />
    </>
  )
}

export default BlogSection
