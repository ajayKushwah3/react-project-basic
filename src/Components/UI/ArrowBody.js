import React from 'react'
import classes from '../Assets/Css/bl.module.css';
import Button from './Button';
import IconArrowUp from '../Assets/Img/Svg/IconArrowUp'
import IconArrowRight from '../Assets/Img/Svg/IconArrowRight'
import IconArrowLeft from '../Assets/Img/Svg/IconArrowLeft'
import IconArrowDown from '../Assets/Img/Svg/IconArrowDown'
import IconArrowPuls from '../Assets/Img/Svg/IconArrowPuls'
import IconArrowMinus from '../Assets/Img/Svg/IconArrowMinus'

const ArrowBody = (props) => {
  return (
    <>
        <div className={classes['arrowbody']}>
            <ul>
                <li><Button className={`${classes['btnArrow']} ${classes['iAUp']}`}><IconArrowUp /></Button></li>
                <li><Button className={`${classes['btnArrow']} ${classes['iALeft']}`}><IconArrowLeft /></Button></li>
                <li><Button className={`${classes['btnArrow']} ${classes['iadata']}`}>{props.datas}</Button></li>
                <li><Button className={`${classes['btnArrow']} ${classes['iARight']}`}><IconArrowRight /></Button></li>
                <li><Button className={`${classes['btnArrow']} ${classes['iAMinus']}`}><IconArrowMinus /></Button></li>
                <li><Button className={`${classes['btnArrow']} ${classes['iADown']}`}><IconArrowDown /></Button></li>
                <li><Button className={`${classes['btnArrow']} ${classes['iAPuls']}`}><IconArrowPuls /></Button></li>
            </ul>
        </div> 
    </>
  )
}

export default ArrowBody
