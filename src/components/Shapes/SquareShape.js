// @jsx jsx
import { jsx, useThemeUI } from "theme-ui"
import Rotate from "../Rotate"

export default function SquareShape({ position }) {
  const { theme } = useThemeUI()
  return (
    <div>
      <Rotate speed={-100}>
        <div
          sx={{
            width: [200, 400],
            height: [200, 400],
            backgroundColor: "transparent",
            border: "40px solid",
            borderColor: `transparent ${theme.colors.primary} ${theme.colors.primary}`,
            opacity: 0.1,
            borderRadius: 999,
            position: "absolute",
            zIndex: 1,
            transform: "rotate(45deg)",
            ...position,
          }}
        />
      </Rotate>
      <Rotate speed={100}>
        <div
          sx={{
            width: [100, 200],
            height: [100, 200],
            backgroundColor: "secondary",
            border: "10px solid",
            borderColor: `${theme.colors.secondary} transparent`,
            transform: "rotate(45deg)",
            opacity: 0.1,
            borderRadius: 999,
            position: "absolute",
            ...position,
          }}
        />
      </Rotate>
    </div>
  )
}

SquareShape.defaultProps = {
  position: {
    top: 50,
    right: 50,
  },
}
