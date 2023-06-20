import React from 'react'
import siteLogo from '../assets/img/logo-Paone.png'
import classes from '../assets/css/fw.module.css';
import { Link } from "react-router-dom";
import backbtn from '../assets/img/back.png'
const NavLinks = (props) => {
  return (
    <div>
       <nav className={props.className }>
          <div className={`${classes['backBtn']} ${classes['mviewDesplay']}`} onClick={props.onClick}><img src={backbtn} alt="" /></div>
          <ul>
              <li className={`${classes['sMLogo']} ${classes['mviewDesplay']}`}><Link  to='/'> <img src={siteLogo} alt="" /> </Link></li>
              <li ><Link  className={classes['active']} to='/'><span>Home</span></Link></li>
              <li ><Link  to='/about'> <span>About</span></Link></li>
              <li ><Link  to='/allemployee'> <span>All Employee</span></Link></li>
              <li ><Link  to='/ourwork'><span>Our  Work</span></Link></li>
              <li ><Link className={`${classes['btn']} ${classes['btn-orange']}`}  to='tel:+91 73548 15494'><span>Add Employee</span></Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavLinks
