/** @jsx jsx */
import { jsx, Box, Flex, Link } from "theme-ui"
import Img from "gatsby-image"
import { Icon } from "react-icons-kit"
import { twitter } from "react-icons-kit/fa/twitter"
import { facebook } from "react-icons-kit/fa/facebook"
import { youtube } from "react-icons-kit/fa/youtube"
import { useStaticQuery, graphql } from "gatsby"
import Wrapper from "../wrapper"

export default function Footer() {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logooo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <footer style={{ overflow: "hidden" }}>
      <Wrapper>
        <Box sx={{ width: 200, mx: "auto", pt: 5 }}>
          <Img fluid={file.childImageSharp.fluid} />
        </Box>
        <Flex sx={{ justifyContent: "center", pb: 5, a: { p: 3 } }}>
          <Link href="#" target="_blank" rel="noopener">
            <Icon size={20} icon={facebook} />
          </Link>
          <Link href="#" target="_blank" rel="noopener">
            <Icon size={20} icon={twitter} />
          </Link>
          <Link href="#" target="_blank" rel="noopener">
            <Icon size={20} icon={youtube} />
          </Link>
        </Flex>
      </Wrapper>
    </footer>
  )
}
