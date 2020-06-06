import { useEffect, useState } from "react"

export default () => {
  const isBrowser = typeof window !== undefined
  const [scrolled, setScrolled] = useState(false)
  const [overNav, setOverNav] = useState(false)
  const handleScrolling = () => {
    setScrolled(window.pageYOffset > 0)
    setOverNav(window.scrollY >= 100)
  }
  useEffect(() => {
    if (isBrowser) {
      const initScrolled = window.pageYOffset > 0
      setScrolled(initScrolled)
      window.addEventListener("scroll", handleScrolling)
      return () => window.removeEventListener("scroll", handleScrolling)
    }
  })

  return { scrolled, overNav }
}
