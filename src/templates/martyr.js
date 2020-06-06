/** @jsx jsx */
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Box, Flex, Heading, jsx } from "theme-ui"
import Img from "gatsby-image"

export default function MartyrTemplate({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        name,
        role,
        avatar,
        martyrdate,
        martyrplace,
        govern,
        borndate,
      },
    },
  },
}) {
  return (
    <Layout>
      <SEO title={name} />
      <div>
        <Box>
          <Box sx={{ backgroundColor: "light", height: 230 }}></Box>
          <Box
            sx={{
              mx: "auto",
              px: 3,
              mt: -50,
              maxWidth: 800,
            }}
          >
            <Flex>
              <Img
                sx={{
                  width: 100,
                  minWidth: 100,
                  backgroundColor: "background",
                  boxShadow: "5px 10px 10px #9999992e",
                  height: 100,
                  borderRadius: 9999,
                  overflow: "hidden",
                }}
                fluid={avatar.childImageSharp.fluid}
              />
              <Box sx={{ mt: 20, marginInlineStart: 20 }}>
                <Heading as="h1" sx={{ fontSize: 2 }}>
                  {name} - {role}
                </Heading>
                <p style={{ marginBottom: 5 }}>
                  أستشهد في {martyrplace} - {martyrdate}
                </p>
                <p style={{ marginTop: 5 }}>
                  مواليد <strong>{borndate}</strong> - محافظة{" "}
                  <strong>{govern}</strong>
                </p>
              </Box>
            </Flex>
            <Box sx={{ my: 5 }} dangerouslySetInnerHTML={{ __html: html }} />
          </Box>
        </Box>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        avatar {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        name
        role
        govern
        martyrplace
        martyrdate(formatString: "DD. MM. YYYY")
        borndate(formatString: "DD. MM. YYYY")
      }
    }
  }
`
