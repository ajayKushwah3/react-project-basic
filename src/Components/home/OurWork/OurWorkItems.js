import React from 'react'
import classes from '../../assets/css/fw.module.css';
import OurWorkitem from './OurWorkitem'
import { OWIDate } from '../../Datas/Datas.js'
const OurWorkItems = (props) => {
    

    const getOWIDate = OWIDate.slice(0, props.oworkdata).map((owudItems)=> (
        <OurWorkitem  id={owudItems.id}
        key={owudItems.id}
        owiname={owudItems.owiname}
        owidisc={owudItems.owidisc}
        owiLinks={owudItems.owiLinks}
        owiRating={owudItems.owiRating}
        owiImage={owudItems.owiImage}
        owieven={owudItems.owieven}
        />
    ));
    return (
    <div className={classes['OWSection']}>
        <div className={classes['fw-container']}>
            <div className={classes['OWItemsm']}>
                {getOWIDate}
            </div>
        </div>
    </div>
  )
}

export default OurWorkItems
