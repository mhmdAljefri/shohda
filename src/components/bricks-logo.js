import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box } from "theme-ui"
import useScrolled from "../hooks/useScrolled"

const BricksLogo = () => {
  const { scrolled } = useScrolled()
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "BRICKS-512-NO-TEXT.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logoText: file(relativePath: { eq: "BRICK-TITLE.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Flex sx={{ alignItems: "center" }}>
      <Box sx={{ width: 50 }}>
        <Img fluid={data.logo.childImageSharp.fluid} />
      </Box>
      <Box
        sx={{
          width: scrolled ? 0 : 100,
          transition: "width 400ms",
          marginX: 20,
          overflow: "hidden",
        }}
      >
        <Img fluid={data.logoText.childImageSharp.fluid} />
      </Box>
    </Flex>
  )
}

export default BricksLogo
