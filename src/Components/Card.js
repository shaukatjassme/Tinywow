import { right } from '@popperjs/core';
import React from 'react'
import './Navbar.css';
const Card = (props) => {
  return (
    <>
    <div className='card [{props.ddff} ]' >
        <div className="card-body">
          <h5 className="card-title"><i class="bi bi-file-earmark-text"></i> &nbsp;{props.title}</h5>
          <p className="card-text card-para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        </div>
      </div>

      <div className='main-container container-fluid'>
            <div className='row  feature-toll-row'>
              <div className='col-md-12'>
              <div className='row feature-row'>
              <div className='col-md-6 text-center'>
                <p className='mb-0 tools__span'>Featured Tool :</p>
              </div>
              <div className='col-md-6 text-center pdf-creator'>
              <p className='mb-0'>{props.test}</p> 
              </div>
              </div>
              </div>
            </div>
          </div>
    
   
    </>
  )
}
export default Card;