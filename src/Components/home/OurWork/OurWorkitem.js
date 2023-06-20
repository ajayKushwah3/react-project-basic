import React from 'react'
import classes from '../../assets/css/fw.module.css';
import { Link } from 'react-router-dom';

const OurWorkitem = (props) => {

  const starRating = props.owiRating;
  const starRatingval = (starRating * 100 )/5;
  const myCStyle = {
    width:`${starRatingval}%`
 }
  return (
    <div className={`${classes['OWItems']} ${classes[props.owieven]}`}>
        <div className={classes['OWIImage']}>
            <img src={require(`../../assets/img/${props.owiImage}`)} alt='' />
        </div>
        <div className={classes['OWIContent']}>
          <h5>{props.owiname}</h5>
          <div className={classes['starRating']} role="img">
            <span style={myCStyle}>
              <span className={classes['rating']}>{props.owiRating}</span>
            </span>
          </div>
          <p>{props.owidisc}</p>
          <div className={classes['linkBtn']}>
            <Link to="/" className={`${classes['btn']} ${classes['btn-border']}`}>View All</Link>
          </div>
        </div>
    </div>
  )
}

export default OurWorkitem
