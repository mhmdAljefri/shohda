/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx, Flex, Text } from "theme-ui"
import Wrapper from "../wrapper"
import useScrolled from "../../hooks/useScrolled"
import Nav from "./Nav"
import Drawer from "../Drawer"
import { Link } from "gatsby"

function Header(props) {
  const { scrolled } = useScrolled()
  return (
    <header
      sx={{
        position: "fixed",
        bg: scrolled ? "background" : "transparent",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        boxShadow: scrolled && "0 10px 10px #9999992e",
      }}
    >
      <Wrapper>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text
            as={Link}
            to="/"
            sx={{
              color: "primary",
              background: "-webkit-linear-gradient(#000, #bb1608, #bb1608)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            شُهداء الواجِب
          </Text>
          <Flex>
            <Nav sx={{ display: ["none", null, "block"] }} />
            <Drawer>
              <Nav
                listStyle={{
                  flexDirection: "column",
                }}
              />
            </Drawer>
          </Flex>
        </Flex>
      </Wrapper>
    </header>
  )
}

Header.propTypes = {}

export default Header
