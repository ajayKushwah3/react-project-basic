import React from 'react'
import PageBanner from '../Banner/PageBanner'
import Pbimg from '../assets/img/pagebanner.png'
import Product from '../Product/Product'
import classes from '../assets/css/fw.module.css';

const Allemployee = () => {
  return (
    <div className={classes['allemployee']}>
        <PageBanner imageName={Pbimg} cName={'All Employee'} />
        <Product />
    </div>
  )
}

export default Allemployee
