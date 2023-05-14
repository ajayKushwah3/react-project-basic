import React from 'react'
import classes from '../assets/css/slp.module.css'

const Filter = (props) => {
   
  return (
    <div className={classes.FilterBox}>
        <h5><span>{props.haddingName}</span></h5>
        <ul>
            {
                props.SpacexdataFilter.map((datay, index)=>{
                    return(
                        <li key={index}>
                            <input type='radio' className='onhendler' name={props.name} value={datay} id={`${props.name}${datay}`} onChange={()=> props.fHendler(datay)} />
                            <label htmlFor={`${props.name}${datay}`}> {datay}</label>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Filter
