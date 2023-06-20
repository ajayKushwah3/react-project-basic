import React from 'react';

import classes from '../../assets/css/b.module.css';

const Container = (props) => {
  return (
    <div className={`${classes.bContainer} ${props.className}`}>{props.children}</div>
  );
};

export default Container;
