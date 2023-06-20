import React from 'react';

import classes from '../../assets/css/b.module.css';

const AHref = (props) => {
  return (
    <a
      href={props.href || '#'}
      className={`${classes.aLink} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </a>
  );
};

export default AHref;
