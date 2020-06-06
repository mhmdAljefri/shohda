// @jsx jsx
import { jsx, Flex } from "theme-ui"
import PropTypes from "prop-types"

function ToggleButton({ onToggle, isOpen }) {
  return (
    <Flex
      onClick={onToggle}
      sx={{
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        padding: 20,
        "& > div:first-of-type": isOpen && {
          marginBlockEnd: -9,
          transform: "rotateZ(45deg)",
        },
        "& > div:last-child": isOpen && {
          marginBlockStart: 7,
          transform: "rotateZ(-45deg)",
        },
      }}
    >
      <div
        sx={{
          height: 2,
          width: 30,
          margin: 1,
          backgroundColor: "heading",
          transition: "all 200ms",
        }}
      />
      <div
        sx={{
          height: 2,
          width: 30,
          margin: 1,
          backgroundColor: "heading",
          transition: "all 200ms",
        }}
      />
    </Flex>
  )
}

ToggleButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default ToggleButton
