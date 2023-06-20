import React from 'react'

export default function CardItem(props) {

  return (
      <div className={props.className}>{props.children}</div>      
  )
}

