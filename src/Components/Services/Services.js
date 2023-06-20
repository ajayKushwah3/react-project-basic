import React from 'react'
import classes from '../../assets/css/b.module.css';
import AHref from '../UI/AHref';
import ServicesCardItem from './ServicesCardItem'
const Services = (props) => {
    const servicesNameGet = [
        {
            id: '1',
            img: 'Sales',
            name: 'Sales',
        },
        {
            id: '2',
            img: 'SalesHistory',
            name: 'Sales History',
        },
        {
            id: '3',
            img: 'Dashboard',
            name: 'Dashboard',
        },
        {
            id: '4',
            img: 'Leaderboards',
            name: 'Leaderboards',
        },
        {
            id: '5',
            img: 'Attendance',
            name: 'Attendance',
        },
        {
            id: '6',
            img: 'Stock',
            name: 'Stock',
        },
        {
            id: '7',
            img: 'OffersCoupons',
            name: 'Offers & Coupons',
        },
        {
            id: '8',
            img: 'Rewards',
            name: 'Rewards',
        },
    ];
    const servicesCardIlist = servicesNameGet.map((meal) => (
        <ServicesCardItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          img={meal.img}
        />
      ));
  return (
    <>
    <div className={`${classes['servicesBody']} ${classes['border3px']}`}>
        <h4 className={classes['servicesName']}>
            <span>Services</span>
            <AHref >View all</AHref>
        </h4>
        <div className={classes['servicesCard']}>
            {servicesCardIlist}
        </div>
    </div>
      
    </>
  )
}

export default Services
