/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as ThemedLink } from "theme-ui"
import { Link } from "gatsby"
import useMobile from "../hooks/useMobile"
import useScrolled from "../hooks/useScrolled"
import { Reveal } from "react-genie"
import useMenuQuery from "../hooks/useMenuQuery"
import useLang from "../hooks/useLang"

export default function Nav() {
  const { scrolled } = useScrolled()
  const { mobile } = useMobile()
  const lang = useLang()
  const menus = useMenuQuery()

  if (!scrolled && mobile) return false
  return (
    <div>
      <ul
        sx={{
          position: ["absolute", "relative"],
          top: [64, 0],
          backgroundColor: ["background", "transparent"],
          display: "flex",
          mx: 25,
          left: [0, "auto"],
          right: [0, "auto"],
          padding: [10, 0],
          flexDirection: ["column", "row"],
          textAlign: ["center", "start"],
        }}
      >
        {Object.keys(menus).map((key, index) => (
          <li sx={{ listStyle: "none" }} key={index}>
            <Reveal delay={100 + 50 * index}>
              <ThemedLink
                as={Link}
                sx={{ mx: 11, "&:hover": { color: "heading" }, fontSize: ['10px', '12px', '16px'] }}
                to={menus[key].linkobj[lang]}
              >
                {menus[key].titleobj[lang]}
              </ThemedLink>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  )
}
