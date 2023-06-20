import React from 'react'
import classes from '../../assets/css/b.module.css';
import LanguageSvg from '../../assets/img/svg/LanguageSvg';

const NavFooter = () => {
  return (
    <div className={classes['NavFooterLink']}>
        <ul>
            <li><a href='#'><LanguageSvg /><span>English (US)</span></a></li>
            <li><a href='#'><span>Privacy</span></a></li>
            <li><a href='#'><span>Terms & Cond.</span></a></li>
        </ul>
    </div>
  )
}

export default NavFooter
