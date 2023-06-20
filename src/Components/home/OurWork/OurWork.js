import React from 'react'
import classes from '../../assets/css/fw.module.css';
import Haddings from '../../UI/Haddings'
import OurWorkItems from './OurWorkItems';
export default function OurWork(props) {
  return (
    <div className={classes['OurWorkSection']}>
        <Haddings className={classes['fw-hadding-col']} fristName="Our " secandName="Work"></Haddings>
        <OurWorkItems oworkdata={props.oworkdata} />
    </div>
  )
}
