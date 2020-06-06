import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { isEqual } from "lodash"
import { useSpring, animated } from "react-spring"

function ParallexScrollVertical({ speed, children }) {
  const ref = useRef({})
  const [elementOffsetY, setElementOffsetY] = useState(false)
  const [animation, set] = useSpring(() => ({ x: 0, immediate: !ref.current }))

  const handleScroll = () => {
    let rotate = 0
    const { scrollY, innerHeight } = window
    // var translate =  (scrollTop - off) / $(window).height() * 100;

    rotate = ((scrollY - elementOffsetY) / innerHeight) * speed
    set({ x: rotate })
  }

  useEffect(() => {
    if (!elementOffsetY || elementOffsetY !== ref.current.getBoundingClientRect().top) {
      setElementOffsetY(ref.current.getBoundingClientRect().top)
    }
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
      ref={ref}
      style={{
        transform: animation.x.interpolate(value => `translateX(${value}%)`),
      }}
    >
      {children}
    </animated.div>
  )
}

ParallexScrollVertical.defaultProps = {
  speed: 10,
}
ParallexScrollVertical.propTypes = {
  speed: PropTypes.number,
}

export default ParallexScrollVertical
