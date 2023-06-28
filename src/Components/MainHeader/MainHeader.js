import React, { useState } from 'react'
import ModalsB from '../Data/ModalsB';
import classes from '../Assets/Css/bl.module.css';
import IconMenu from '../Assets/Img/Svg/IconMenu';
import IconDisplay from '../Assets/Img/Svg/IconDisplay';
import IconMapTag from '../Assets/Img/Svg/IconMapTag';
import IconPhoto from '../Assets/Img/Svg/IconPhoto';
import IconLocationDefine from '../Assets/Img/Svg/IconLocationDefine';
import IconBoardChart from '../Assets/Img/Svg/IconBoardChart';
import IconSignal from '../Assets/Img/Svg/IconSignal';
import IconCalendarSmall from '../Assets/Img/Svg/IconCalendarSmall';
import IconMapPin from '../Assets/Img/Svg/IconMapPin';
import rBack from '../Assets/Img/back.png'
import NavFooter from './NavFooter';
import { Link } from 'react-router-dom';

const MainHeader = (props) => {
  const [isshow, setisShow] = useState(false);
  const [ismobile, setismobile] = useState(false);
  return (
    <>
      <header className={`${classes['main-header']} ${ismobile? `${classes['mobileActive']}` : ''}`} id='mainHeader' >
        <div className={classes['mobilenave']}>
          <span ><Link  onClick={ () => setismobile(!ismobile)}><IconMenu /></Link></span>
        </div>
        <div className={classes['NavSidebar']}>
          <div className={classes['topHeader']}>
            <nav className={props.className }>
                <ul className={classes['NSul']}>
                  {
                    ismobile? <li ><Link onClick={ () => setismobile(!ismobile)}><img src={rBack} alt="" /></Link></li> : <li ><Link><IconMenu /></Link></li>
                  }
                    <li ><Link onClick={ () => setisShow(true)}><IconDisplay /></Link></li>
                    <li ><Link><IconMapTag /></Link></li>
                    <li ><Link><IconPhoto /></Link></li>
                    <li ><Link><IconLocationDefine /></Link></li>
                    <li ><Link><IconBoardChart /></Link></li>
                    <li ><Link><IconSignal /></Link></li>
                    <li ><Link><IconCalendarSmall /></Link></li>
                    <li ><Link><IconMapPin /></Link></li>
                </ul>
              </nav>
          </div>
          <div className={classes['bottfooter']}>
            <NavFooter />
          </div>
        </div>
      </header>
      <ModalsB isshow={isshow} isonHide={() => setisShow(false)} />
    </>
  );
};

export default MainHeader;
