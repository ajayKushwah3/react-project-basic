import React from 'react'
import classes from '../../assets/css/b.module.css';
import Profile from '../Profile/Profile';
import calenderImg from '../../assets/img/calender.png';
import LeaderboardsList from './LeaderboardsList'
import ChartC from '../Chart/ChartC';
import SalesAchievement from '../UI/SalesAchievement'
import TebBar from '../TebBar/TebBar'
import MainHeader from '../MainHeader/MainHeader';

const Leaderboards = () => {
  return (
    <>
      <MainHeader LuNamesr='Leaderboards' dataName={true}  />

      <div className={classes['ProfileDashboard']}>
        <h3 className={classes['pRank']}>Rank <span>#5</span></h3>
        <div className={`${classes['selectbox']}  ${classes['alineTop0']}`}>
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
        
        <Profile className={`${classes['dashboardProfile']}`} />
      </div>
    <LeaderboardsList />
    <SalesAchievement Title="Your achievement" symbolSign="%" saValue="85" sudValue="15.65%" classNameUD={classes['saDoun']} discr="Compared to Sureka Angel (#1)"/>
    <ChartC />

    <TebBar/> 
      
    </>
  )
}

export default Leaderboards
