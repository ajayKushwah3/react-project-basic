import React from 'react'
import classes from '../../assets/css/b.module.css';

const LeaderboardsItems = (props) => {
  return (
    <>
    <div className={classes['LlistBoxBody']}>
        <div className={classes['listBoxcard']}>
            <div className={classes['listImage']}>
                <img src={require(`../../assets/img/${props.listImg}`)} alt="" />
            </div>
            <div className={classes['listContent']}>
                <h4>{props.listValue}</h4>
                <h6>{props.listContent}</h6>
            </div>
        </div>
    </div> 
    </>
  )
}

export default LeaderboardsItems
