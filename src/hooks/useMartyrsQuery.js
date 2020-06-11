import { useStaticQuery, graphql } from "gatsby"

export default function useMartyrsQuery() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/martyrs/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              name
              role
              borndate
              martyrdate
              govern
              avatar {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
