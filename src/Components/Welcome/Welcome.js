import React from 'react'
import classes from '../../assets/css/b.module.css'
import sLogo from '../../assets/img/sLogo.png';
import google from '../../assets/img/google.png';
import apple from '../../assets/img/apple.png';
import AHref from '../UI/AHref'
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    
    <div className={classes['welcome']}>
      <div className={classes['bContainer']}>
        <div className={classes['boxBody']}>
            <div className={classes['boxCard']}>
                <div className={classes['slogo']}>
                    <img src={sLogo} alt="" />
                </div>
                <div className={classes['mainHadding']}>
                    <h1>Welcome to <span>Beautgenics</span></h1>
                    <p>An app where you can manage all your Beauty Analyst activties & much more...</p>
                </div>
                <div className={classes['button_box']}> 
                    <h5>Let’s get started...</h5>
                    <AHref className={`${classes['button']} ${classes['link']} ${classes['mbtn']}`}>
                        <img src={google} alt="" />
                        <span>Continue with Google</span>
                    </AHref>
                    <AHref className={`${classes['button']} ${classes['black']} ${classes['mbtn']}`}>
                        <img src={apple} alt="" />
                        <span>Continue with apple</span>
                    </AHref>
                </div>
                <h6 className={classes['signLink']}>Already have an account?  <Link to='login'>Sign in</Link></h6>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
