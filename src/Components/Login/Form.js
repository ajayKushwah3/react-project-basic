import React, {useState} from 'react'
import useInput from '../../hooks/use-input';
import Button from '../UI/Button';
import AHref from '../UI/AHref'
import showeye from '../../assets/img/eye.png'
import classes from '../../assets/css/b.module.css'

// const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');
const isPass = (value) => value.trim().length > 6;


const Form = (props) => {

  const [isRevealPwd, setIsRevealPwd] = useState(false);


  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetpassword,
  } = useInput(isPass);

 
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (passwordIsValid  && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(passwordValue,   emailValue);

    resetpassword();
    resetEmail();
  };

  const typeHendler = event =>{

  }

  const emailClasses = emailHasError ? classes['invalid'] : '';
  const passwordClasses = passwordHasError ? classes['invalid'] : '';
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={`${classes['form-control']} ${emailClasses}`}>
          <label htmlFor='email'>Email address/Phone</label>
          <input
            type='text'
            id='email'
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder={'Email address/Phone'}
          />
          {emailHasError && <p className="error-text">Please enter a valid Email address/Phone.</p>}
        </div>
        <div className={`${classes['form-control']} ${passwordClasses} `}>
          <label htmlFor='password'>Enter your password</label>
            <input
              type={isRevealPwd ? "text" : "password"}
              id='password'
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              placeholder={'Enter your password'}

            />
            <span className={isRevealPwd ? `${classes['passEvants']} ${classes['show']}` : `${classes['passEvants']} ${classes['hide']}`}  onClick={() => setIsRevealPwd(prevState => !prevState)}><img src={showeye} alt="" /></span>
            {passwordHasError && <p className="error-text">Please enter a password.</p>}
        </div>
        <div className={classes['forgotPassword']}>
          <AHref >Forgot password?</AHref>
        </div>
        <div className={classes['form-control']}>
          <div className={classes['styleCheckbox']}>
              <input type='checkbox' id='remember'/>
              <label htmlFor='remember'>Remember my login info</label>
          </div>
        </div>
        <div className={classes['form-actions']}>
          <Button disabled={!formIsValid} className={`${classes['theme']}`} >Sign in</Button>
        </div>
      </form>
    </>
  );
};

export default Form;
