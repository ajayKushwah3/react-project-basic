import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classes from '../../assets/css/fw.module.css';
import ImageItems from './ImageItems'
import {sImageDate} from '../../Datas/Datas.js'
const ImageSlider = (props) => {

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      };
      const getsIDate = sImageDate.map((sitems)=>(
        <ImageItems 
        id={sitems.id}
        key={sitems.id}
        ftitlename={sitems.ftitlename}
        ltitlename={sitems.ltitlename}
        bIMage={sitems.bIMage}
        />
      ))
  return (
    <div className={classes['slidersection2']}>
        <Slider {...settings}>
            {getsIDate}
        </Slider>
    </div>
  )
}

export default ImageSlider
