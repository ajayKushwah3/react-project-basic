import React from 'react'
import classes from '../assets/css/fw.module.css';
import OurWork from '../home/OurWork/OurWork'
import Banner from '../Banner/Banner';
import ImageSlider from '../home/ImageSlider/ImageSlider'
import Product from '../Product/Product'
export default function Home() {
 
  return (
    <div className={classes['homePage']}>
        <Banner />
        <Product Datapage={6} />
        <ImageSlider />
        <OurWork oworkdata={3} />


    </div>
  )
}
