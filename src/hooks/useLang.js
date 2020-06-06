import { useLocation } from "@reach/router"

export default () => {
  const { pathname } = useLocation()

  return pathname.includes("en") ? "en" : "ar"
}
