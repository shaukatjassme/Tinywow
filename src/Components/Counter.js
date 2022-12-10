import React from 'react';
import { right } from '@popperjs/core';
import './Navbar.css';
const Counter = (props) => {
  return (
   <>
    <div className="statistic__num">{props.amount}</div>
    <div className="statistic__text">
      <span>{props.statistic}</span>
     
    </div>
    </>
  )
}
export  default Counter;