import React, {useState} from 'react'
import CarpenterItems from '../home/MainItams/CarpenterItems'
import {FWDUMMYDATA} from '../Datas/Datas.js'
const Product = (props) => {
  const [fwExpenCarpenter, setFwExpenCarpenter] =  useState(FWDUMMYDATA);
  return (
    <>
    
    <CarpenterItems Datapage={props.Datapage} items={fwExpenCarpenter}></CarpenterItems>
    </>
  )
}

export default Product
