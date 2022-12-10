import React from 'react'
import { right } from '@popperjs/core';
import './Navbar.css';

 const Blurb = (props) => {
  return (
   
      <div className='card blurb-card' >
        <div className="card-body">
          <h5 className="card-title blurb-title-text"><i class="bi bi-file-earmark-text"></i> &nbsp;{props.box1}</h5>
          <h6 class="card-subtitle mb-2  sub-blurb-text">{props.subtitle}</h6>
          <p className="card-text card-para blurb-body-text">{props.blurbody}</p>

        </div>
      </div>
    
  )
}
export default Blurb;
