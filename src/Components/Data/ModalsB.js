import React from 'react';
import {createDashboard} from './Data';
import ModalHeader from '../Modal/ModalHeader'
import ModalContent from '../Modal/ModalContent'
import classes from '../Assets/Css/bl.module.css';
import { Link } from 'react-router-dom';

const getdataModalList = createDashboard.map((cdItems)=>{
   return(
     <li id={cdItems.id} key={cdItems.id} className={classes['cdItems']}>
      <Link className={classes['gdataList']} >
        <div className={classes['namec']}>
          <div className={classes['icones']}>
            <img src={require(`../Assets/Img/${cdItems.Icones}.png`)} alt="" /> 
          </div>
            <div className='titlename'>
              {cdItems.titleCName}
            </div>
        </div>
        <div className={classes['nextlink']}>
          <span className={classes['linkurl']}>
          {cdItems.actionLName}
          </span>
        </div>
       </Link>
     </li>
   )
 }) 
const ModalsB = (props) => {
  return (
    <>
     <div className={classes['modalDiloge']} style={{display:`${ props.isshow? 'block' : 'none'}`}} >
        <div className={classes['modalBackground']} onClick={props.isonHide}></div>
        <div className={classes['modalContainer']}>
        <ModalHeader TitelName='Create Dashboard'/>
        <ModalContent>
          <div className={classes['dataList']}>
            <ul>
              {getdataModalList}
            </ul>
          </div>
        </ModalContent>
        </div>
      </div>
      
    </>
  )
}

export default ModalsB
