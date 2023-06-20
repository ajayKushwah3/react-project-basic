import React from 'react'
import FwContainer from '../../UI/FwContainer'
import FwRow from '../../UI/FwRow'
import CarpenterItem from './CarpenterItem'
import Haddings from '../../UI/Haddings'
import classes from '../../assets/css/fw.module.css';

export default function CarpenterItems(props) {
  return (
    <FwContainer className={classes['fw-container']}>
        <Haddings className={classes['fw-hadding-col']} fristName="Furniture" secandName="Wala"></Haddings>
            <FwRow className={classes['fw-row']}>
              {props.items.slice(0, props.Datapage).map((expens)=> 
              <CarpenterItem 
              key={expens.id}
              expyear={expens.expyear}
              name={expens.name} 
              disc={expens.disc} 
              wahtsApp={expens.wahtsApp}/>
              )}
            </FwRow>
      </FwContainer>
 
  )
}
