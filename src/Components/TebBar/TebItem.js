import React from 'react'
import classes from '../../assets/css/b.module.css';

const TebItem = (props) => {
  return (
    <li className={`${classes['itmeListBox']} ${props.className}`}>
      <a href='#'>
        <div className={classes['iLBCard']}>
            <div className={classes['itemImg']}>
                <img src={require(`../../assets/img/${props.image}`)} alt='' />
            </div>
            <div className={classes['itemContent']}>
                <h5>{props.name}</h5>
                <p>{props.disc}</p>
                <h6>Achievement: <span>{props.achievement}</span></h6>
            </div>
            <div className={classes['itemRenk']}>
                <h1>{props.rank}</h1>
            </div>
        </div>
      </a>
    </li>
  )
}

export default TebItem
