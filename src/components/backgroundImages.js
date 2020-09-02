// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import BackgroundSlider from "gatsby-image-background-slider"

// const BackgroundImages = () => (
//   <BackgroundSlider
//     query={useStaticQuery(graphql`
//       query {
//         backgrounds: allFile(
//           filter: { sourceInstanceName: { eq: "backgrounds" } }
//         ) {
//           nodes {
//             relativePath
//             childImageSharp {
//               fluid(maxWidth: 4000, quality: 100) {
//                 ...GatsbyImageSharpFluid_withWebp_noBase64
//               }
//             }
//           }
//         }
//       }
//     `)}
//   />
// )

export default BackgroundImages
