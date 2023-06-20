import React from 'react';
import classes from '../assets/css/fw.module.css';
import { Link } from 'react-router-dom';
import fLogo from '../assets/img/footer_logo.png'
import SosLinks from './SosLinks';
const Footer = (props) => {
  return (
    <footer id="mainFooteras" className={classes['mainFooter']}>
        <div className={classes['footerSection']}>
            <div className={classes['fw-container']}>
                <div className={classes['footerldl']}>
                    <div className={classes['fLogo']}>
                        <Link to=''>
                            <img src={fLogo} alt="" />
                        </Link>
                    </div>
                    <div className={classes['fDiscrip']}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div className={classes['soslinks']}>
                            <SosLinks />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['footercopy']}>
                <div className={classes['fw-container']}>
                    <p>© Copyright 2023 Ajay Kushwah. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
