import React from 'react'
import classes from '../assets/css/fw.module.css';

const NavFooter = () => {
  return (
    <div className={classes['NavFooterLink']}>
        <ul>
            <li>
                <a>
                    <span>English (US)</span>
                </a>
            </li>
            <li>
                <a>
                    <span>Privacy</span>
                </a>
            </li>
            <li>
                <a>
                    <span>Terms & Cond.</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default NavFooter
