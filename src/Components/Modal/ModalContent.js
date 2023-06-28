import React from 'react'
import classes from '../Assets/Css/bl.module.css'
const ModalContent = (props) => {
  return (
    <div className={classes['modalContent']}>{props.children}</div>
  )
}

export default ModalContent
