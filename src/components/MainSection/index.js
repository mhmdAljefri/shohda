/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function MainSection() {
  const data = useStaticQuery(graphql`
    {
      munneer: file(relativePath: { eq: "شهداء.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section
      sx={{
        position: "relative",
        height: "100vh",
        backgroundColor: "background",
        display: "flex",
        alignItems: "center",
        p: 5,
      }}
    >
      <div
        style={{
          maxWidth: 800,
        }}
      >
        <p>
          وَلَا تَحْسَبَنَّ الَّذِينَ قُتِلُوا فِي سَبِيلِ اللَّهِ أَمْوَاتًا ۚ
          بَلْ أَحْيَاءٌ عِندَ رَبِّهِمْ يُرْزَقُونَ (169) - سورة آل عمران
        </p>
        <h1
          sx={{
            color: "primary",
            background: "-webkit-linear-gradient(#000, #bb1608, #bb1608)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            m: 0,
            p: 0,
            fontSize: [5, 5, 60],
          }}
        >
          شٌهَدَاء الواجِب -<span> الموقع التكريمي لشهداء الجنوب</span>
        </h1>
      </div>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          zIndex: 0,
          left: 0,
        }}
      >
        <Img
          style={{
            width: "90vw",
            maxWidth: 1000,
          }}
          imgStyle={{ objectFit: "contain", objectPosition: "left" }}
          fluid={{ ...data.munneer.childImageSharp.fluid, aspectRatio: 21 / 9 }}
        />
      </Box>
    </section>
  )
}

MainSection.propTypes = {}

export default MainSection
