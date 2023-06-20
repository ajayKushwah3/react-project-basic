import React from 'react'
import classes from '../assets/css/fw.module.css';

export default function Haddings(props) {

  return (
        <div className={props.className}>
          <h3 className={classes['hadding-title']}>{props.fristName} <span>{props.secandName}</span></h3>
        </div>
  )
}
