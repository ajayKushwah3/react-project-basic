import React from 'react'
import classes from '../assets/css/fw.module.css';
import { Link } from 'react-router-dom';
import {SosLinksdata} from '../Datas/Datas'
const SosLinks = (props) => {

 
    const getSosLinksdata = SosLinksdata.map((sositems)=>{
        return(
            <li id={sositems.id} key={sositems.id} className={classes[sositems.fontFamaly]}>
                <Link to={sositems.sosLinks} className={` ${classes[sositems.name]}`}></Link>
            </li>
        )
    })
  return (
    <ul className={classes['soslinksul']}>
      {getSosLinksdata}
    </ul>
  )
}

export default SosLinks
