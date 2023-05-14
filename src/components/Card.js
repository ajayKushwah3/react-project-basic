import React  from 'react';
import classes from '../assets/css/slp.module.css';
const Card = (props) => {
   
      return (
        <div className={classes.cBBox} >
            <div className={`${classes.Card} ${classes.FBox}`}>
                <div className={classes.imgbox}>
                    <img src={props.imgs} alt="" />
                </div>
                <div className={classes.contant}>
                    <h5 className={classes.Mname}><span>{props.mname}#{props.flightnumber}</span></h5>
                    <ul>
                        <li><b>Mission Ids:</b> <span>{props.missionid}</span></li>
                        <li><b>Launch Year:</b> <span>{props.launchyear}</span></li>
                        {props.launchsuccess !== null && <li><b>Successful Launch:</b> <span>{props.launchsuccess?<span className={classes.checkd}></span>:<span className={classes.uncehckd}></span>}</span></li>}
                        
                        {props.landSuccess !== null && <li><b>Successful Landing:</b> <span>{props.landSuccess? <span className={classes.checkd}></span> : <span className={classes.uncehckd}></span>}</span></li>}
                    </ul>
                </div>
            </div>
        </div>
      );
    };

export default Card
