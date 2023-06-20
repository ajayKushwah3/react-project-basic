import React from 'react'
import { Link } from 'react-router-dom';
import classes from '../assets/css/fw.module.css';

const BannerItems = (props) => {
  return (
    <div className={classes['fw-container']}>
      <div className={classes['sliderItem']}>
          <div className={classes['sliderContent']}>
              <h1 className={classes['haddingname']}>{props.ftitlename} <span>{props.ltitlename}</span> </h1>
              <p>{props.disc}</p>
              <div className={classes['btnbox']}><Link to='/ourwork' className={`${classes['btn']} ${classes['btn-orange']}`}>Our Work</Link></div>
          </div>
          <div className={classes['sliderImage']}>
              <img src={require(`../assets/img/${props.bIMage}`)} alt="" />
          </div>
        </div>
    </div>
  )
}

export default BannerItems
