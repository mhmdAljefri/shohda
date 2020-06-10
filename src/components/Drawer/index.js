import RcDrawer from "rc-drawer"

import React from "react"
import PropTypes from "prop-types"

import "rc-drawer/assets/index.css"
import { useState } from "react"
import MenuButton from "./MenuButton"
import { Global, css } from "@emotion/core"
import { useThemeUI } from "theme-ui"

function Drawer({ children, width, placement }) {
  const [isopen, setIsopen] = useState(false)
  const { theme } = useThemeUI()
  const toggelDrawer = () => setIsopen(!isopen)

  return (
    <React.Fragment>
      <Global
        styles={css`
          .__rc--drawer .drawer-content-wrapper {
            background: ${theme.colors.background};
          }
        `}
      />
      <MenuButton onClick={toggelDrawer} />
      <RcDrawer
        dir="ltr"
        className="__rc--drawer"
        handler={null}
        open={isopen}
        onClose={toggelDrawer}
        width={width}
        placement={placement}
      >
        {children}
      </RcDrawer>
    </React.Fragment>
  )
}

Drawer.defaultProps = {
  width: 300,
  placement: "left",
}

Drawer.propTypes = {
  width: PropTypes.number,
  placement: PropTypes.string,
}

export default Drawer
