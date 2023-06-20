import React from 'react';
import Profile from '../Profile/Profile';
import classes from '../../assets/css/b.module.css';
import calenderImg from '../../assets/img/calender.png';
import SalesAchievement from '../UI/SalesAchievement';
import ChartA from '../Chart/ChartA'
import ChartB from '../Chart/ChartB'
import DcountItems from './DcountItems'
import MainHeader from '../MainHeader/MainHeader';

const Dashboard = () => {
  return (
    <>
      <MainHeader LuNamesr='Dashboard' dataName={true}  />
      <div className={classes['ProfileDashboard']}>
        <div className={classes['selectbox']}>
          <span><img src={calenderImg} alt="" /></span>
          <select>
            <option >October </option>
            <option >November </option>
            <option >December</option>
            <option >January</option>
            <option >February</option>
            <option >March</option>
            <option >April</option>
            <option >May</option>
            <option >June </option>
            <option >July</option>
            <option >August</option>
            <option >September </option>
          </select>
        </div>
      <Profile className={`${classes['border3px']} ${classes['dashboardProfile']}`} />
      </div>
      <SalesAchievement Title="Current sales" symbolSign="$" saValue="87,185" sudValue="15.65%" classNameUD={classes['saUp']} discr="Compared to $45,415 from Sep,2020"/>
      <ChartA ></ChartA>
      <ChartB ></ChartB>
      <SalesAchievement classBName={classes['contentCenter']} Title="Contact collection" saValue="17,185" sudValue="12.07%" classNameUD={classes['saUp']} discr="Compared to 15,415 last month"/>
      <DcountItems />
    </>
  )
}

export default Dashboard
