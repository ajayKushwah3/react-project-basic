import React from 'react'
import classes from '../../assets/css/b.module.css';
import LeaderboardsItems from './LeaderboardsItems'
const LeaderboardsList = () => {
    const DcountItemsobj = [
      {
        id:'1',
        listImg:'dimg1.png',
        listValue:'52.25%',
        listContent:'Contact numbers collected',
      },
      {
          id:'2',
          listImg:'dimg1.png',
          listValue:'17,185',
          listContent:'Contact numbers collected',
      },
        {
            id:'3',
            listImg:'dimg2.png',
            listValue:'25,655',
            listContent:'Contact numbers collected',
        }
    ];
    const DItemsObj = DcountItemsobj.map((meal) => (
        <LeaderboardsItems
          id={meal.id}
          key={meal.id}
          listImg={meal.listImg}
          listValue={meal.listValue}
          listContent={meal.listContent}
        />
      ));
  return (
    <div className={`${classes['LbLBody']} ${classes['border3px']}`}>
      {DItemsObj}
    </div>
  )
}

export default LeaderboardsList
