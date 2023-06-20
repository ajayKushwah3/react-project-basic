import React from 'react'
import HomeSvg from '../../assets/img/svg/Homesvg';
import SalesSvg from '../../assets/img/svg/SalesSvg';
import SalesHistorySvg from '../../assets/img/svg/SalesHistorySvg';
import LeaderboardsSvg from '../../assets/img/svg/LeaderboardsSvg';
import DashboardSvg from '../../assets/img/svg/DashboardSvg';
import LogoutSvg from '../../assets/img/svg/LogoutSvg';
import classes from '../../assets/css/b.module.css';
import { Link } from "react-router-dom";
const NavLinks = (props) => {
  return (
    <div>
       <nav className={props.className}>
        <h6>Quick Access</h6>
          <ul>
              <li ><Link  className={classes['active']} to='/home'> <HomeSvg /><span>Home</span></Link></li>
              <li ><Link  to='/'> <SalesSvg /><span>Sales</span></Link></li>
              <li ><Link  to='/'> <SalesHistorySvg /><span>Sales history</span></Link></li>
              <li ><Link  to='/leaderboards'> <LeaderboardsSvg /><span>Leaderboards</span></Link></li>
              <li ><Link  to='/dashboard'> <DashboardSvg /><span>Dashboard</span></Link></li>
              <li ><Link  to='/login'> <LogoutSvg /><span>Logout</span></Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavLinks
