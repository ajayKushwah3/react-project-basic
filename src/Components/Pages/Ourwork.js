import React from 'react'
import PageBanner from '../Banner/PageBanner'
import Pbimg from '../assets/img/our work.png'
import classes from '../assets/css/fw.module.css';
import OurWorks from '../home/OurWork/OurWork'
const Ourwork = (props) => {
  return (
    <div>
        <PageBanner className={classes['OurWorkit']}  imageName={Pbimg} cName={''} />
        <OurWorks oworkdata={props.oworkdata} />
    </div>
  )
}

export default Ourwork
