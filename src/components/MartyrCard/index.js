/** @jsx jsx */
import PropTypes from "prop-types"
import { Card, Heading, Text, jsx } from "theme-ui"
import Img from "gatsby-image"
import { Link } from "gatsby"

function MartyrCard({ name, role, sx, avatar, path }) {
  return (
    <Card
      as={Link}
      to={path}
      sx={{
        textDecoration: "none",
        color: "auto",
        backgroundColor: "background",
        mb: 20,
        mx: "auto",
        py: 4,
        width: "100%",
        px: 3,
        position: "relative",
        textAlign: "center",
        ":hover": {
          backgroundColor: "light",
        },
        ...sx,
      }}
    >
      <Img
        sx={{
          width: 80,
          height: 80,
          bg: "background",
          mx: "auto",
          borderRadius: 9999,
          boxShadow: "10px 10px 10px #9999992e",
          border: "4px solid",
          borderColor: "background",
        }}
        imgStyle={{ objectPosition: "center" }}
        fluid={avatar.childImageSharp.fluid}
      />
      <Heading as="h2" sx={{ m: 0, p: 0, mt: 2, fontSize: [2] }}>
        {name}
      </Heading>
      <Text sx={{ m: 0, color: "text" }}>{role}</Text>
    </Card>
  )
}

MartyrCard.propTypes = {
  path: PropTypes.string.isRequired,
}

export default MartyrCard
