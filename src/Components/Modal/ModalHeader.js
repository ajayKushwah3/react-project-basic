import React from 'react'
import classes from '../Assets/Css/bl.module.css'
const ModalHeader = (props) => {
  return (
    <div className={classes['modalHeader']}>
        <h3 className={`${classes['modalTitle']} ${props.className}`}>{props.TitelName}{props.children}</h3>
    </div>
  )
}

export default ModalHeader
