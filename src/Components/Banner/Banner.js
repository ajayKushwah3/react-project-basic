import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classes from '../assets/css/fw.module.css';
import BannerItems from './BannerItems'
import {sliderDate} from '../Datas/Datas'
const Banner = (props) => {

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      };
      const getsliderDate = sliderDate.map((sitems)=>(
        <BannerItems 
        id={sitems.id}
        key={sitems.id}
        ftitlename={sitems.ftitlename}
        ltitlename={sitems.ltitlename}
        disc={sitems.disc}
        bIMage={sitems.bIMage}
        />
      ))
  return (
      <div className={classes['slidersection']}>
      <div className={classes['backIMage']}>
        <div className={classes['sliderItems']}>
          <Slider {...settings}>
              {getsliderDate}
          </Slider>
        </div>
        </div>
      </div>
  )
}

export default Banner
