import React from 'react';
import classes from '../Assets/Css/bl.module.css';
import iimage from '../Assets/Img/img.png';
import { Link } from 'react-router-dom';
import {screlinks} from '../Data/Data'
import ArrowBody from '../UI/ArrowBody';
const getscrelinks = screlinks.map((screitems)=>{
  return(
        <li className={classes['listCard']} key={screitems.id}>
        <Link className={classes['screlink']}>
          <div className={classes['iconetest']}>
            <img src={require(`../Assets/Img/${screitems.scericones}.png`)} alt="" />
          </div>
          <div className={classes['contenttext']}>
            <b>{screitems.titleName}</b>
            <span className={`${classes[screitems.classdata]}`}>{screitems.subtitleName}</span>
          </div>
        </Link>
      </li>
  )
})
const Home = (props) => {
  return (
    <>
      <div className={classes['HomeSection']} >
        <div className={classes['imageBox']}>
            <img src={iimage} alt="" />
        </div>  
        <div className={classes['screBody']}>
          <ul>
           {getscrelinks}
          </ul>
        </div>
        <div className={classes['arrowBBox']}>
          <ArrowBody datas='6' />
          <ArrowBody datas='2' />
        </div>
      </div>
    </>
  )
}

export default Home
