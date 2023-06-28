import React from 'react'
import Button from '../UI/Button'
import classes from '../Assets/Css/bl.module.css'
const ModalFooter = (props,) => {
  return (
    
    <div className={classes['modalFooter']} >
        { props.btnCancal? <Button className={`${classes['btn']} ${classes['btnBorder']}`} onClick={props.onHide}>Cancel</Button> : ''}
        { props.btnNext?<Button className={`${classes['btn']} ${classes['btnThame']}`}>Next</Button>:''}
    </div>
  )
}

export default ModalFooter
