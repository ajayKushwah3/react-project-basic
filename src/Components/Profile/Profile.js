import React from 'react'
import classes from '../../assets/css/b.module.css';
import user from '../../assets/img/user.png'
const Profile = (props) => {
  return (
    <>
      <div className={`${props.className} ${classes['userProfile']}`}>
          <img src={user} alt="" />
          <div className={classes['userName']}>
              <h3>Sarika Seghal</h3>
              <p>Senior beauty analyst</p>
          </div>
      </div>
    </>
  )
}

export default Profile;
