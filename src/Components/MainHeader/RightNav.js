import React, { useState } from 'react'
import classes from '../Assets/Css/bl.module.css';
import IconPlus from '../Assets/Img/Svg/IconPlus';
import IconJoystick from '../Assets/Img/Svg/IconJoystick';
import IconEdit from '../Assets/Img/Svg/IconEdit';
import IconWebcam from '../Assets/Img/Svg/IconWebcam';
import IconFullScreen from '../Assets/Img/Svg/IconFullScreen';
import IconHand from '../Assets/Img/Svg/IconHand';
import ModalsA from '../Data/ModalsA';
import ModalsC from '../Data/ModalsC'
import { Link } from 'react-router-dom';

const RightNav = (props) => {
  const [show, setShow] = useState(false);
  const [inshow, setinShow] = useState(false);
  
  return (
    <>
    <div className={classes['RightNavBAr']}>
        <ul>
            <li ><Link onClick={() => setShow(true)}><IconPlus /></Link></li>
            <li ><Link onClick={() => setinShow(true)}><IconJoystick /></Link></li>
            <li ><Link><IconEdit /></Link></li>
            <li ><Link><IconFullScreen /></Link></li>
            <li ><Link><IconWebcam /></Link></li>
            <li ><Link><IconHand /></Link></li>
        </ul>
    </div>
    <ModalsA show={show} onHide={() => setShow(false)} />
    <ModalsC inshow={inshow} inonHide={() => setinShow(false)} />
    </>
  )
}

export default RightNav
