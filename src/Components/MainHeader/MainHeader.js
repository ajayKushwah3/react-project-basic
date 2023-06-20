import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import siteLogo from '../assets/img/logo-Paone.png'
import 'jquery';
import classes from '../assets/css/fw.module.css';
import $ from 'jquery'
import { Link } from 'react-router-dom';
const MainHeader = (props) => {
  
  const evantIsSideBar = event => {
    document.body.classList.toggle(`${classes['sideBarOpen']}`);
  }
  useEffect(() => {
      function headerInnerHeight() {
      var hIHeight = $('#mainHeader').outerHeight();
      var fIHeight = $('#mainFooteras').outerHeight();
          $('body').attr("style", "--hIHeight:" + hIHeight + "px; --fIHeight:" + fIHeight + "px;");
        }
      headerInnerHeight();

      $(document).on('scroll', function () {
        var hIHeight = $('#mainHeader').outerHeight();
  
          if ($(window).scrollTop() >= hIHeight) {
              $('#mainHeader').addClass('fixed-header');
          } else {
            $('#mainHeader').removeClass('fixed-header');
          }
      });
  },[])
  return (
    <>
      <header className={`${classes['main-header']} `} id='mainHeader'>
        <div className={classes['fwcontainer']}>
          <div className={classes['headerBox']}>
              <div className={` ${classes['mviewDesplay']} ${classes['togaleevent']}`} onClick={evantIsSideBar}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={classes['siteLogo']}>
                <Link  to='/'> <img src={siteLogo} alt="" /> </Link>
              </div>
          </div>
          <Navigation onClick={evantIsSideBar}  />
        </div>
      </header>
    </>
  );
};

export default MainHeader;
