import React from 'react'
import classes from '../assets/css/fw.module.css';

const PageBanner = (props) => {
  return (
    <div className={`${classes['mainBannerP']} ${props.className}`}>
        <div className={classes['mbpImage']}>
            <img src={props.imageName} alt="" />
        </div>
       <div className={classes['fw-container']}>
        <div className={classes['mpContent']}>
                <h1>{props.cName}</h1>
            </div>
       </div>
    </div>
  )
}

export default PageBanner
