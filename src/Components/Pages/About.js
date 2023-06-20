import React from 'react'
import PageBanner from '../Banner/PageBanner'
import Pbimg from '../assets/img/pagebanner.png'
import AboutContent from '../About/AboutContent'
const About = () => {
  return (
   <>
   <PageBanner imageName={Pbimg} cName={'About'} />
   <AboutContent />
   </>
  )
}

export default About
