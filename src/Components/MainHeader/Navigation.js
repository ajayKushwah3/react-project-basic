import React from 'react';
import rlocation from '../../assets/img/rlocation.png';
import Profile from '../Profile/Profile';
import Location from './Location';
import NavFooter from './NavFooter'
import classes from '../../assets/css/b.module.css';
import NavLinks from './NavLinks'
import Sync from './Sync'

const Navigation = (props) => {

  return (
    <>
      <div className={classes['backevant']} onClick={props.onClick}></div>
      <div className={classes['menuBar']}>
        <div className={classes['mBarscroll']}>
            <Profile className={classes['borderBottom']} />
            <div className={`${classes.location} ${classes['navlocation']}`}>
                <img src={rlocation} alt="" />
                <p>Health & Glow, 18th Main Road, HSR, Sector II</p>
            </div>
            <NavLinks className={`${classes['navLinks']} ${classes['borderBottom']}`} />
            <Sync />
        </div>
          <NavFooter />
      </div>
    </>
  );
};

export default Navigation;
