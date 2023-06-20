import React from 'react'
import classes from '../../assets/css/b.module.css';
import SyncNowSvg from '../../assets/img/svg/SyncNowSvg';
import RefreshProductsSvg from '../../assets/img/svg/RefreshProductsSvg';

const Sync = (props) => {
  return (
    <div className={`${props.className} ${classes['navLinks']}`}>
        <div className={classes['synclinks']}>
            <h6>INventory sync</h6>
            <p className={classes['primarycolor']}>Last sync at 12.15pm , 12 oct</p>
        </div>
        <ul>
            <li>
                <a href="/"> 
                    <SyncNowSvg />
                    <span>Sync now</span>
                </a>
            </li>
            <li>
                <a href="/"> 
                    <RefreshProductsSvg />
                    <span>Refresh products</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sync
