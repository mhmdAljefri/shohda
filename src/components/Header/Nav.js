/** @jsx jsx */
import PropTypes from "prop-types"
import DarkModeToggle from "../ColorMode"
import { Link as ThemeLink, jsx } from "theme-ui"
import { Link } from "gatsby"

const navs = [
  { url: "/", title: "الرئيسية" },
  { url: "/martyrs/", title: "صور الشهداء" },
  { url: "/aboutus/", title: "عن الموقع" },
  { url: "/contactus/", title: "التواصل" },
]
1
function Nav({ listStyle, ...props }) {
  return (
    <nav {...props}>
      <ul
        sx={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          alignItems: "center",
          ...listStyle,
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
  )
}

Nav.propTypes = {}

export default Nav
