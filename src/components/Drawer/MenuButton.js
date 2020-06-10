/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useState } from "react"

const styles = {
  span: { width: 25, height: 1, display: "block", bg: "text", mb: 1 },
}

function MenuButton({ onClick }) {
  const [opened, setOpened] = useState(false)

  const toggleOpen = () => setOpened(!opened)
  const handleClick = () => {
    toggleOpen()
    onClick()
  }

  return (
    <div
      sx={{ display: ["block", null, "none"] }}
      onClick={handleClick}
      role="button"
      aria-label="menu-button"
    >
      <span sx={opened ? {} : styles.span}></span>
      <span sx={styles.span}></span>
      <span sx={styles.span}></span>
    </div>
  )
}

MenuButton.defaultProps = {
  onClick: () => {},
}

MenuButton.propTypes = {
  onClick: PropTypes.func,
}

export default MenuButton
