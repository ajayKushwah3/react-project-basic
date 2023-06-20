import React from 'react'
import classes from '../../assets/css/b.module.css';
import user from '../../assets/img/user.png'
const HomeProfile = (props) => {
  return (
    <>
      <div className={`${classes['userHomeProfile']} ${classes['border3px']}`}>
          <div className={classes['usercard']}>
              <h6>Hello Sarika !!</h6>
              <h4>Senior beauty Analyst</h4>
              <div className={classes['progressBar']}>
                <span  style={{width: "70%"}}></span>
              </div>
              <p>Target progress</p>
          </div>
          <div className={classes['userImage']}>
            <img src={user} alt="" />
          </div>
      </div>
    </>
  )
}

export default HomeProfile;
