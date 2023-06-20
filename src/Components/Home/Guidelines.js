import React from 'react'
import classes from '../../assets/css/b.module.css';
import gImag from '../../assets/img/washing.png'
import AHref from '../UI/AHref';
const Guidelines = () => {
  return (
    <>
      <div className={`${classes['guidelinesBody']} ${classes['border3px']}`}>
        <div className={classes['gThamb']}> 
            <img src={gImag} alt="" />
        </div>
        <div className={classes['gcontent']}>
            <h6>Customer safety is OUR priority!</h6>
            <p>Follow our safety guidelines to ensure a safe experience for the Customer.</p>
            <div className={classes['dflex']}><AHref >Safety Guidelines</AHref></div>
        </div>
      </div>
    </>
  )
}

export default Guidelines
