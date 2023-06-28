import React from 'react'
import classes from '../Assets/Css/bl.module.css';
import IconLogOut from '../Assets/Img/Svg/IconLogOut';
import { Link } from 'react-router-dom';

const NavFooter = () => {
  return (
    <div className={classes['NavFooterLink']}>
        <ul>
            <li><Link>EN</Link></li>
            <li><Link><IconLogOut /></Link></li>
        </ul>
    </div>
  )
}

export default NavFooter
