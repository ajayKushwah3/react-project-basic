import React from 'react';
import {RobotSelect} from './Data';
import SearchUi from '../UI/SearchUi';
import IconArrowRight from '../Assets/Img/Svg/IconArrowRight';
import ModalHeader from '../Modal/ModalHeader'
import ModalContent from '../Modal/ModalContent'
import ModalFooter from '../Modal/ModalFooter'
import { Link } from 'react-router-dom';
import classes from '../Assets/Css/bl.module.css';
const getdataModalList = RobotSelect.map((listItems)=>{
   return(
     <li id={listItems.id} key={listItems.id}>
      <Link  className={classes['gdataList']} >
        <div className={classes['namec']}>
          <div className={classes['icones']}>
              <img src={require(`../Assets/Img/${listItems.Icones}.png`)} alt="" /> 
            </div>
            <div className='titlename'>
              {listItems.titleName}
            </div>
        </div>
        <div className={classes['nextlink']}>
          <span>
            <IconArrowRight />
          </span>
        </div>
       </Link>
     </li>
   )
 }) 
const ModalsA = (props) => {
  return (
    <>
    <div className={classes['modalDiloge']} style={{display:`${ props.show? 'block' : 'none'}`}} >
        <div className={classes['modalBackground']} onClick={props.onHide}></div>
        <div className={classes['modalContainer']}>
        <ModalHeader TitelName='Robot Select'/>
        <ModalContent>
        <SearchUi />

          <div className={classes['dataList']}>
            <ul>
              {getdataModalList}
            </ul>
          </div>
        </ModalContent>
        <ModalFooter btnCancal={true} btnNext={true} onHide={props.onHide} />
        </div>
    </div>
     
    </>
  )
}

export default ModalsA
