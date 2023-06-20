import React from 'react'
import classes from '../../assets/css/b.module.css';
import AHref from '../UI/AHref';

const ServicesCardItem = (props) => {
  
  return (
      <>
    <div className={classes['SCardName']}>
        <AHref>
          <div className={classes['thumbanilImge']}>
            <img src={require(`../../assets/img/${props.img}.png`)} alt="" />
          </div>
          <h3>{props.name}</h3>
        </AHref>
    </div>
    </>
  )
}

export default ServicesCardItem;
