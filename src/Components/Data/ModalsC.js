import React, { useState } from 'react';
import {currentieqcharts} from './Data';
import ModalHeader from '../Modal/ModalHeader'
import ModalContent from '../Modal/ModalContent'
import classes from '../Assets/Css/bl.module.css';
import IconBoardChart from '../Assets/Img/Svg/IconeCart';
import IconMenuDots from '../Assets/Img/Svg/IconMenuDots';
import IconPin from '../Assets/Img/Svg/IconPin';
import IconClose from '../Assets/Img/Svg/IconClose';
import IconFscreen from '../Assets/Img/Svg/IconFscreen'
import { Link } from 'react-router-dom';


const getdataModalList = currentieqcharts.map((ciqItems)=>{
   return(
     <li key={ciqItems.id} className={classes['ciqItems']}>
      <Link  className={classes['ciqList']} >
        <div className={classes['namec']}>
            <h4 className={classes['titlename']}>{ciqItems.titleName}</h4>
            <span className={classes['datavalue']}>{ciqItems.datavalue}</span>
            <div className={classes['icones']} style={{'--valuecolor': `${ciqItems.imagecolor}`}}>
              <IconBoardChart  />
            </div>
        </div>
       </Link>
     </li>
   )
 }) 
const ModalsC = (props) => {
  const [isdotmenus, setisdotmenus]= useState(false);

  return (
    <>
     <div className={classes['modalDiloge']} style={{display:`${ props.inshow? 'block' : 'none'}`}} >
        <div className={classes['modalBackground']} onClick={props.inonHide}></div>
        <div className={`${classes['modalContainer']} ${classes['ciqmodalC']}`}>
        <ModalHeader TitelName='Current IEQ Charts' className={classes['menuPopup']}>
          <span onClick={() => setisdotmenus(!isdotmenus)}>
            <IconMenuDots />
          </span>
          <div className={classes['dotMenus']} style={{display:`${!isdotmenus? 'none': 'block'}`}}>
            <ul>
              <li><Link className={classes['IconeSsvg']}><IconPin /><span>Pin</span></Link></li>
              <li><Link className={classes['IconeSsvg']}><IconFscreen /><span>Full Screen</span></Link></li>
              <li><Link className={classes['IconeSsvg']} onClick={() => setisdotmenus(!isdotmenus)}><IconClose /><span>Close</span></Link></li>
            </ul>

          </div>
        </ModalHeader>
        <ModalContent >
          <div className={classes['dataList']}>
            <ul className={classes['mciqtItmes']}>
              {getdataModalList}
            </ul>
          </div>
        </ModalContent>
        </div>
      </div>
      
    </>
  )
}

export default ModalsC
