import React from 'react'
import classes from '../../assets/css/fw.module.css';
const ImageItems = (props) => {
  return (
    <div className={classes['sliderIItem']}>
        <div className={classes['sliderIImage']}>
            <img src={require(`../../assets/img/${props.bIMage}`)} alt="" />
        </div>
        <div className={classes['sliderContent']}>
            <h1 className={classes['haddingname']}>{props.ftitlename} <span>{props.ltitlename}</span></h1>
        </div>
    </div>
  )
}

export default ImageItems
