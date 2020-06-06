// @jsx jsx
import { jsx, useThemeUI, } from "theme-ui"
import Wrapper from '../wrapper'
import { Reveal, Animation } from 'react-genie'
import Mockups from './mockups'
import useLang from "../../hooks/useLang"

function Feature({ isOdd, titleobj, hintObj, detailsobj, desktopImage, mobileImage }) {
  const language = useLang()

  return (
    <Wrapper>
      <div
        sx={{
          py: [0, 40],
          my: [0, 20],
          display: "flex",
          flexDirection: isOdd ? "row-reverse" : "row",
          flexWrap: "wrap-reverse",
          textShadow: '0 2px 0 ' + useThemeUI().theme.colors.background
        }}
      >
        <div sx={{ flex: "1 1 300px", maxWidth: 600 }}>
          <Mockups
            mobileImage={mobileImage}
            desktopImage={desktopImage}
            speed={isOdd ? 12 : -12}
            sx={{
              flexDirection: isOdd ? "row" : "row-revers",
              marginInlineEnd: [20, 100],
              transform: "translateY(30vw)",
            }}
            mobileProps={{
              sx: isOdd
                ? {
                  transform: "translate(-50px, -50px)",
                }
                : {
                  transform: "translate(-30vw, -50px)",
                },
            }}
          />
        </div>

        <div sx={{ flex: "1 1 400px", mx: [0, 50], padding: 20 }}>
          <Reveal animation={Animation.FadeInUp} delay={1000}>
            <h2
              sx={{
                variant: "text.heading",
              }}
            >
              {titleobj[language]}
            </h2>
            <small sx={{ color: "primaryTextColor" }}>{hintObj[language]}</small>
            <p>{detailsobj[language]}</p>
          </Reveal>
        </div>
      </div>
    </Wrapper>
  )
}

Feature.propTypes = {

}

export default Feature

