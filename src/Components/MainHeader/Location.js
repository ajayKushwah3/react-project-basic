import React from 'react'
import classes from '../../assets/css/b.module.css';
const Location = (props) => {

  return (
    <>
    <div className={`${classes.location} ${classes[props.className]}`}>
        <img src={props.imgsrc} alt="" />
        <p>{props.LocationName}</p>
    </div>
   </>
  )
}

export default Location
