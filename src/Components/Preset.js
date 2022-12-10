import { right } from '@popperjs/core';
import React from 'react'
import './Navbar.css';

const Preset = (props) => {
  return (
   <>
   <div className="card preset-card" >
   <img src={props.pic} alt="" />
  <div className="card-body">
    <h5 className="card-title blurb-title-text">{props.descc}</h5>
    <p className="card-text blurb-body-text">{props.presetbd}</p>
    <a href="#" className="btn present-cart__link">Learn More <i class="bi bi-arrow-right"></i></a>
  </div>
</div>
   </>
  )
}
export default Preset;