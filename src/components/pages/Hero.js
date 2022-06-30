import { Link } from "react-router-dom"
import { Button } from "../extras/Button"
import "./Hero.css";
import { useSpring, animated } from 'react-spring'


function Hero({
  lightBg, topLine,lightBlue, lightText,lightTextDesc, headline,description, buttonLabel, src, alt,imgStart
}) {

  
  const slideLeft = useSpring({
    from: { x: -900 },
    to: { x: 0 }

  })


  const slideDown = useSpring({
    from: { y: -900 },
    to: { y: 0 },
    delay:500

  })


  const fadeIn=useSpring({
    from:{opacity:0},
    to:{opacity:1},
    delay:200
  })




  return (
    <div className={lightBg? "hero_light":"hero_dark" }>
        <div className="container">
          <div className="row hero_row" style={{display:'flex', flexDirection:imgStart==="start"?"row-reverse":"row"}}>
              <div className="col">
                <div className="hero_text_wrapper" style={{marginLeft:imgStart==="start"?"40px":""}}>
                  <animated.div style={{...slideLeft}} className="topLine red">{topLine}</animated.div>
                  <animated.h1 style={{...slideLeft}} className={lightText?"hero_heading light":"hero_heading dark"}>{headline}</animated.h1>
                  <animated.p style={{...slideLeft}} className={lightTextDesc?"sub_heading light":"sub_heading dark"}>{description}</animated.p>
                  <animated.div style={{...fadeIn}}>
                  <Link style={{...fadeIn}} to="/sign-up">
                    <Button buttonStyle={"btn--primary"} buttonSize={"btn--wide"} buttonColor={"blue"}>
                      {buttonLabel}
                    </Button>
                  </Link>
                  </animated.div>
                </div>
              </div>
              <div className="col">
                <div className="hero_img_wrapper">
                  <animated.img style={{...slideDown}} src={src} alt={alt} className="hero_img" />
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Hero