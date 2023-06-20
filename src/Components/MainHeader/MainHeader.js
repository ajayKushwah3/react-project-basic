import React, {useState} from 'react';
import AHref from '../UI/AHref';
import location from '../../assets/img/location.png';
import notification from '../../assets/img/notification.png';
import Navigation from './Navigation';
import Location from './Location';
import classes from '../../assets/css/b.module.css';

const MainHeader = (props) => {
  const [isSideBar, setIsSideBar] = useState(false);
  const evantIsSideBar = event => {
    setIsSideBar(!isSideBar);
  }

  return (
    <header className={`${classes['main-header']} ${isSideBar ? classes['sideBarOpen'] : ""} `}>
      <div className={classes['bContainer']}>
          <div className={classes['headerBox']}>
            <div className={classes['togaleevent']} onClick={evantIsSideBar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Location LocationName={props.LuNamesr}  imgsrc={location} className={props.dataName} />
            <div className={classes['notification']}>
              <AHref>
                <img src={notification} alt="" />
              </AHref>
            </div>
          </div>
      </div>
      <Navigation onClick={evantIsSideBar}  />
    </header>
  );
};

export default MainHeader;
