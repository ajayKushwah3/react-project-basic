import React from 'react'
import classes from '../../assets/css/b.module.css';

const DcountList = (props) => {
  return (
    <>
        <div className={classes['listBoxBody']}>
            <div className={classes['listBoxcard']}>
                <div className={classes['listImage']}>
                    <img src={require(`../../assets/img/${props.listImg}`)} alt="" />
                </div>
                <div className={classes['listContent']}>
                    <h4>{props.listValue}</h4>
                    <h6>{props.listContent}</h6>
                </div>
            </div>
            <div className={classes['listChart']}>
                <img src={require(`../../assets/img/${props.listChartImg}`)} alt="" />
            </div>
        </div> 
    </>
  )
}

export default DcountList
