import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { useSpring, animated } from "react-spring"

function Rotate({ speed, children }) {
  const [animation, set] = useSpring(() => ({ x: 0 }))

  const handleScroll = () => {
    let rotate = 0
    rotate = window.pageYOffset / speed
    set({ x: rotate })
  }
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (typeof window !== undefined)
        return window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <animated.div
      style={{
        transform: animation.x.interpolate(value => `rotateZ(${value}deg)`),
      }}
    >
      {children}
    </animated.div>
  )
}

Rotate.defaultProps = {
  speed: 30,
}
Rotate.propTypes = {
  speed: PropTypes.number,
}

export default Rotate
