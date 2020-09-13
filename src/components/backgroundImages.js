import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const BackgroundImages = () => (
  <BackgroundSlider
    query={useStaticQuery(graphql`
      query {
        backgrounds: allFile(
          filter: { sourceInstanceName: { eq: "backgrounds" } }
        ) {
          nodes {
            relativePath
            childImageSharp {
              fluid(maxWidth: 4000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)}
    initDelay={2}
    transition={4}
    duration={6}
    images={[
      "arches.jpg",
      "beetham.jpg",
      "china-town.jpg",
      "deansgate.jpg",
      "nq.jpg",
      "street.jpg",
      "townhall.jpg",
    ]}
  />
)

export default BackgroundImages
