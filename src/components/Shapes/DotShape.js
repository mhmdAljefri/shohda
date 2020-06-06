// @jsx jsx
import { jsx, useThemeUI } from "theme-ui"
import PropTypes from "prop-types"

function DotShape({ sx, background, ...props }) {
  const { theme } = useThemeUI()
  return (
    <div
      {...props}
      sx={{
        backgroundImage: `radial-gradient(${background ||
          theme.colors.background} 15%,transparent 25%)`,
        backgroundSize: "20px 20px",
        position: "absolute",
        content: `""`,
        width: 800,
        height: 245,
        left: 0,
        marginLeft: -412,
        top: 0,
        marginTop: -40,
        zIndex: -1,
        ...sx,
      }}
    />
  )
}

DotShape.propTypes = {}

export default DotShape
