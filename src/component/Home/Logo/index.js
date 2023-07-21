import './index.scss';
import LogoS from '../../../assets/photos/infinity.logo-removebg-preview.png'
import gsap from 'gsap-trial'
import { useEffect,useRef } from 'react'

const Logo = () =>  {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
          })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
      }, [])
    
    return (
        <div className="logo-container" ref={bgRef}>
       <img ref ={solidLogoRef}src={LogoS} alt="S" className="solid-logo" />
       <svg className="svg-container" width="200" height="100">
  <path
    className="path-way"
    stroke="#ededed"
    id="outline"
    fill="none"
    strokeWidth="8"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="10"
    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
  />
  <path
    ref={outlineLogoRef}
    id="outline-bg"
    opacity="0.05"
    fill="none"
    stroke="#ededed"
    strokeWidth="8"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="10"
    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
  />
</svg>


        </div>
    )
}

export default Logo