import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Intro from "../components/intro"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hi, I'm Jordan"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Intro />
        {/* <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link> */}
      </Layout>
    )
  }
}

export default IndexPage
