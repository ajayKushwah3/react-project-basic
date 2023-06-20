import React, {useState} from 'react'
import Button from '../../UI/Button';
import classes from '../../assets/css/fw.module.css';

export default function FormFilds(props) {
    
    const [enterdExpyear, setenterdExpyear] = useState('');
    const [enterdName, setenterdName] = useState('');
    const [enterdDisc, setenterdDisc] = useState('');
    const [enterdNumber, setenterdNumber] = useState('');

    const expyearCheangHendler = (event)=>{ 
        setenterdExpyear(event.target.value)
    }
    const discCheangHendler = (event)=>{ 
        setenterdName(event.target.value)
    }
    const nameCheangHendler = (event)=>{ 
        setenterdDisc(event.target.value)
    }
    const numberCheangHendler = (event)=>{ 
        setenterdNumber(event.target.value)
    }
    const submitHendler = (event) =>{
        event.preventDefault();
        
        const expenseData = {
            expyear:enterdExpyear,
            name:enterdName,
            disc:enterdDisc,
            wahtsApp:enterdNumber
        }
        props.onSaveExpensData(expenseData)
        setenterdExpyear('');
        setenterdName('');
        setenterdDisc('');
        setenterdNumber('');
    }
  return (
    <form onSubmit={submitHendler}>
        <div className={classes['new-form-controls']}>
            <div className={classes['new-form-control']}>
                <div className={classes['fwI-row']}>
                    <label for="">Expyear</label>
                    <input type="number" min='1' value={enterdExpyear} onChange={expyearCheangHendler} />
                     
                </div>
            </div>
            <div className={classes['new-form-control']}>
                <div className={classes['fwI-row']}>
                    <label for="">Name</label>
                    <input type="text" onChange={discCheangHendler} value={enterdName} />
                </div>
            </div>
            <div className={classes['new-form-control']}>
                <div className={classes['fwI-row']}>
                    <label for="">Disc</label>
                    <input type="text" onChange={nameCheangHendler} value={enterdDisc} />
                </div>
            </div>
            <div className={classes['new-form-control']}>
                <div className={classes['fwI-row']}>
                    <label for="">Waht's App Number</label>
                    <input type="number" value={enterdNumber} min='13'  onChange={numberCheangHendler} />
                </div>
            </div>
            <div className={classes['new-actione']}>
                <div className={classes['fwI-row']}>
                    <Button type="submit" className={classes['btn btn-orange']}>Add Member</Button>
                </div>
            </div>
        </div>
    </form>
  )
}
