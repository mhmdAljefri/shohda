// @jsx jsx
import { jsx, Card } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ParallexScrollVertical from "../ParallexScrollVertical"

const Mockups = ({ sx, speed, desktopImage, mobileImage, mobileProps: { sx: mobileSx, ...mobileProps } }) => {
  const dirStyle = { right: 0 }
  return (
    <div
      sx={{
        alignItems: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 400,
        marginTop: 20,
        ...sx,
      }}
    >
      <ParallexScrollVertical speed={speed}>

        <Card
          sx={{
            p: 0,
            overflow: "hidden",
            width: ["90vw", 600],
            minWidth: 200,
            mx: "auto",
            borderRadius: 25,
          }}
        >
          <Img fluid={desktopImage.childImageSharp.fluid} />
        </Card>
      </ParallexScrollVertical>
      <Card
        sx={{
          width: [100, 150],
          overflow: "hidden",
          p: 0,
          borderRadius: 25,
          position: "absolute",
          marginInlineEnd: [80, 0],
          ...mobileSx,
          ...dirStyle,
        }}
        {...mobileProps}
      >
        <Img fluid={mobileImage.childImageSharp.fluid} />
      </Card>
    </div>
  )
}

Mockups.defaultProps = {
  mobileProps: { sx: {} },
}

export default Mockups
