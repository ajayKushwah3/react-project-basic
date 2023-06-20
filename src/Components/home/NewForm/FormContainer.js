import React from 'react'
import FormFilds from './FormFilds'
import FwContainer from '../../UI/FwContainer'
import classes from '../../assets/css/fw.module.css';

export default function FormContainer(props) {

  const onSaveExpensDataHendler=(onSaveExpensData)=>{
    const exenseData = {
      ...onSaveExpensData,
      id: Math.random().toString() 

    };
    props.onAddExpense(exenseData);
  };

  return (
    <FwContainer className={classes['container']}>
      <div className={classes['NewForm']}>
        <FormFilds onSaveExpensData={onSaveExpensDataHendler} />
      </div>
    </FwContainer>
  )
}
