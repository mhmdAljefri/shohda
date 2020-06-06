/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { Link as ThemeLink, jsx, Flex, Text } from "theme-ui"
import { Link } from "gatsby"
import Wrapper from "../wrapper"
import useScrolled from "../../hooks/useScrolled"
import DarkModeToggle from "../ColorMode"

const navs = [
  { url: "/", title: "الرئيسية" },
  { url: "/martyrs/", title: "صور الشهداء" },
  { url: "/aboutus/", title: "عن الموقع" },
  { url: "/contactus/", title: "التواصل" },
]

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
            sx={{
              color: "primary",
              background: "-webkit-linear-gradient(#000, #bb1608, #bb1608)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            شُهداء الواجِب
          </Text>
          <nav>
            <ul
              sx={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              {navs.map(({ title, url }) => (
                <li
                  sx={{
                    marginInlineEnd: 15,
                    wordBreak: "keep-all",
                    whiteSpace: "nowrap",
                  }}
                  key={url}
                >
                  <ThemeLink
                    as={Link}
                    to={url}
                    partiallyActive
                    activeClassName="active"
                  >
                    {title}
                  </ThemeLink>
                </li>
              ))}
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </nav>
        </Flex>
      </Wrapper>
    </header>
  )
}

Header.propTypes = {}

export default Header
