import React from 'react'
import logoImg from '../../assets/img/logo.png';
import classes from '../../assets/css/b.module.css';
const Splash = () => {
  return (
    <div className={classes['bContainer']}>
        <div className={classes['lCenter']}>
          <img src={logoImg} alt="logo" />
        </div>
    </div>
  )
}

export default Splash;
