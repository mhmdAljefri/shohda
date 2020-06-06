import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { isEqual } from "lodash"
import { useSpring, animated } from "react-spring"

function ParallexScroll({ speed, children }) {
  const ref = useRef({})
  const [elementOffsetY, setElementOffsetY] = useState(false)
  const [animation, set] = useSpring(() => ({ x: 0 }))

  const handleScroll = () => {
    let rotate = 0
    const { scrollY, innerHeight } = window

    rotate = ((scrollY - elementOffsetY) / innerHeight) * speed
    set({ x: rotate })
  }

  useEffect(() => {
    const isBrowser = typeof window !== undefined

    if (!elementOffsetY || elementOffsetY !== ref.current.getBoundingClientRect().top)
      setElementOffsetY(ref.current.getBoundingClientRect().top)
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (isBrowser)
        return window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <animated.div
      ref={ref}
      style={{
        transform: animation.x.interpolate(value => `translateY(${value}%)`),
      }}
    >
      {children}
    </animated.div>
  )
}

ParallexScroll.defaultProps = {
  speed: 20,
}
ParallexScroll.propTypes = {
  speed: PropTypes.number,
}

export default ParallexScroll
