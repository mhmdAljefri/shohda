import { useEffect, useState } from "react"

export default () => {
  const [mobile, setMobile] = useState(true)
  const [small, setSmall] = useState(true)
  const [verySmall, setVerySmall] = useState(false)

  const handleResizing = () => {
    setMobile(window.innerWidth <= 700)
    setSmall(window.innerWidth <= 630)
    setVerySmall(window.innerWidth <= 350)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      handleResizing()
      window.addEventListener("resize", handleResizing)
    }
    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener("resize", handleResizing)
      }
    }
  })

  return { mobile, small, verySmall }
}
