import React from 'react'
import classes from '../../assets/css/b.module.css';

const SalesAchievement = (props) => {
  return (
    <>
      <div className={`${classes['SAchievement']} ${props.classBName} `}>
        <h4>{props.Title}</h4>
        <h1 className={`${classes['sAVal']} ${props.className}`}>
            <span className={classes['symbolSign']}>{props.symbolSign}</span>
            <span className={classes['saValue']}>{props.saValue}</span>
            <span className={props.classNameUD}>{props.sudValue}</span>
        </h1>
        <p>{props.discr}</p>
      </div>
    </>
  )
}

export default SalesAchievement
