import React from 'react'
import PageBanner from '../Banner/PageBanner'
import Pbimg from '../assets/img/pagebanner.png'
import OurWorks from '../home/OurWork/OurWork'
const Works = () => {
  return (
    <div>
        <PageBanner imageName={Pbimg} cName={'My Works'} />
        <OurWorks />
    </div>
  )
}

export default Works
