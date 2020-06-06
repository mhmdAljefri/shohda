import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, useColorMode } from "theme-ui"
import Rotate from "./Rotate"

const ShapeBG = () => {
  const [mode] = useColorMode() // "dark"

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "shape_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Box
      sx={{
        alignItems: "center",
        position: "relative",
        top: 0,
        zIndex: -99,

        opacity: 1,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Rotate speed={-100}>
        <Box
          sx={{
            filter: mode === "dark" && "invert(1)",
            width: ["90vw", 800],
            position: "absolute",
          }}
        >
          <Img fluid={data.logo.childImageSharp.fluid} />
        </Box>
      </Rotate>
    </Box>
  )
}

export default ShapeBG
