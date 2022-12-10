import { right } from '@popperjs/core';
import React from 'react'
import './Navbar.css';

 const Footercomp = () => {
  return (
    <>
          <div className='main-container container-fluid  footer-section'>
        <div className='row p-10'>
        <div className='col-md-1  my-auto text-center'>
        <img src='./logo-2.png' alt="" className='' />
        </div>
        <div className='col-md-3 p-0 my-auto'>
        <p className='fw-bold mt-3 provide-text last-tiny'>TinyWow is a <span style={{color:'#007dff'}}>Box20</span> Media Company </p>
       
        </div>
        <div className='col-md-8 p-0 my-auto copywrite-text'>
        <p className='fw-bold mt-3 provide-text'>  @ 2022 TinyWow. All rights reserved</p>
        </div>
        </div>
        
      </div>
      </>
  )
}
export default Footercomp;
