import React from 'react';
import NavFooter from './NavFooter'
import classes from '../assets/css/fw.module.css';
import NavLinks from './NavLinks'

const Navigation = (props) => {

  return (
    <>
      <div className={`${classes['backevant']} ${classes['mView']}`} onClick={props.onClick}></div>
      <div className={classes['menuBar']}>
        <div className={classes['mBarscroll']}>
            <NavLinks className={`${classes['navLinks']} `} onClick={props.onClick} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
