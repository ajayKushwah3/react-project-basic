import React from 'react';
import Form from './Form';
import AHref from '../UI/AHref';
import classes from '../../assets/css/b.module.css';
import sLogo from '../../assets/img/sLogo.png';
import back from '../../assets/img/back.png';
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className={classes['Login']}>
        <div className={classes['bContainer']}>
            <div className={classes['boxBody']}>
                <div className={classes['boxCard']}>
                  <div className={classes['backBtn']}>
                    <Link className={classes['backlink']} to='/'><img src={back} alt="" /></Link>
                  </div>
                  <div className={classes['slogo']}>
                      <img src={sLogo} alt="" />
                  </div>
                  <div className={`${classes['mainHadding']} ${classes['login']}`}>
                      <h2>Sign in</h2>
                      <p>Using your beautgenics account </p>
                  </div>
                  <Form />
                  <h6 className={classes['signLink']}>Don’t have an account?   <Link to='/home'>Sign up</Link></h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
