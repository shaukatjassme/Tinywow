import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Card from './Card';
import Counter from './Counter';
import Blurb from './Blurb';
import Preset from './Preset';
import  Headcomp  from './Headcomp';
// import  Footercomp  from './Footercomp';
import { Colors } from './Colors';




const NavbarNew = () => {


  return (

    <>
    

      <div className='main-container container-fluid'>
        <div className='row text-center tiny-row-text' >
          <div className='col-md-12'>
            <p>Want TinyWow Updates? No Spam. &nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary subs-class">Primary</button></p>
          </div>
        </div>
      </div>
      <div className='main-container container-fluid'>
        <div className='row text-center'>
          <div className='col-md-12'>
            <h1 className='free-text'>Free Tools to Make <span>Busniss</span> Simple</h1>
            <p className='descr gray'>We offer PDF, video, image and other online tools to make your life easier</p>
          </div>
        </div>
      </div>
      <div className='main-container container-fluid '>
        <div className='row text-center height d-flex justify-content-center align-items-center'>
          <div className='col-md-8'>
            <div className='search'>
              <i className='bi bi-search'></i>
              <input type="text" className='form-control' placeholder="Have a question? Ask Now" />
              <button type="button" class="btn btn-primary subs-class">Primary</button>
            </div>
          </div>
        </div>
      </div>



      <div className='main-container container-fluid mt-3 mb-3 blurb-section'>
        <div className='row '>
          <div className='col-md-3'>
            <Card title="PDF" body="blue-body" test="Pdf Creator"  />
          </div>
          <div className='col-md-3'>
            <Card title="Image" test="Remove BG" ddff='card4' />
          </div>
          <div className='col-md-3'>
            <Card title="Video" test="Mute Video" />
          </div>
          <div className='col-md-3'>
            <Card title="File" test="Paragraph " />
          </div>
        </div>
      </div>





      <div className='main-container container-fluid mt-3 mb-3 counter-section '>
        <div className='row '>
          <div className='col-md-3 d-flex '>
            <Counter amount='1m' statistic="Active User" />
          </div>
          <div className='col-md-3 d-flex '>
            <Counter amount='10m' statistic="Files Files" />
          </div>
          <div className='col-md-3 d-flex '>
            <Counter amount='200+' statistic="Online Tools" />
          </div>
          <div className='col-md-3 d-flex '>
            <Counter amount='500k' statistic="PDFs Created" />
          </div>

        </div>
      </div>








      <div className='main-container container-fluid busniss-section '>
        <div className='row text-center'>
          <div className='col-md-12'>
            <h1 className='free-text'>Our Most Popular Tools</h1>
            <p className='descr gray'>We present the best of the best. All free, no catch</p>
            <div className='main-container container-fluid search-btn-section'>
              <div className='row text-center height d-flex justify-content-center align-items-center'>
                <div className='col-md-8'>
                  <div className='search'>

                    <input type="text" className='form-control ' disabled placeholder="" />
                    <button type="button" class="btn btn-primary all-tool-btn"><i className='bi bi-database tool-search-icon'></i> All Tools</button>
                    <button type="button" class="btn btn-primary all-pdf-btn"><i className='bi bi-filetype-pdf tool-search-icon'></i> Pdf Tools</button>
                    <button type="button" class="btn btn-primary all-video-btn"><i className='bi bi-file-play tool-search-icon'></i> Video Tools</button>
                    <button type="button" class="btn btn-primary all-image-btn"><i className='bi bi-image tool-search-icon'></i> Image Tools</button>
                    <button type="button" class="btn btn-primary all-convert-btn"><i className='bi bi-microsoft tool-search-icon'></i> Converter Tools</button>
                    <button type="button" class="btn btn-primary all-other-tool-btn"><i className='bi bi-tools tool-search-icon'></i> Other Tools</button>
                    <button type="button" class="btn btn-primary all-write-btn"><i className='bi bi-pen tool-search-icon'></i> AI Write</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='main-container container-fluid mb-3 blurb-section'>
        <div className='row '>
          <div className='col-md-3'>
            <Blurb box1="Remove Background from" blurbody="Easily Remove the Background from an image" test="Pdf Creator" subtitle='Image Tools' />
          </div>
          <div className='col-md-3'>
            <Blurb box1="Merge PDF" test="Remove BG" blurbody="Merge 2 or more PDF files into a single PDF file" test="Pdf Creator" subtitle='Pdf Tools' />
          </div>
          <div className='col-md-3'>
            <Blurb box1="PDF to JPG" test="Mute Video" blurbody="Convert PDF to JPG and download each page as an image" test="Pdf Creator" subtitle='Pdf Tools' />
          </div>
          <div className='col-md-3'>
            <Blurb box1="JPG TO PDF" test="Paragraph " blurbody="Upload images and receive as a PDF download each page as an image" test="Pdf Creator" subtitle='Pdf Tools' />
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-3'>
            <Blurb box1="Remove Background from" blurbody="Easily Remove the Background from an image" test="Pdf Creator" subtitle='Image Tools' />
          </div>
          <div className='col-md-3'>
            <Blurb box1="Merge PDF" test="Remove BG" blurbody="Merge 2 or more PDF files into a single PDF file" test="Pdf Creator" subtitle='Pdf Tools' />
          </div>
          <div className='col-md-3'>
            <Blurb box1="PDF to JPG" test="Mute Video" blurbody="Convert PDF to JPG and download each page as an image" test="Pdf Creator" subtitle='Pdf Tools' />
          </div>
          <div className='col-md-3'>
            <Blurb box1="JPG TO PDF" test="Paragraph " blurbody="Upload images and receive as a PDF download each page as an image" test="Pdf Creator" subtitle='Pdf Tools' />
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-3'>
            <Blurb box1="Remove Background from" blurbody="Easily Remove the Background from an image" test="Pdf Creator" subtitle='Image Tools' />
          </div>
          <div className='col-md-3'>
            <Blurb box1="Merge PDF" test="Remove BG" blurbody="Merge 2 or more PDF files into a single PDF file" test="Pdf Creator" subtitle='Pdf Tools' />
          </div>
          <div className='col-md-3'>
            <Blurb box1="PDF to JPG" test="Mute Video" blurbody="Convert PDF to JPG and download each page as an image" test="Pdf Creator" subtitle='Pdf Tools' />
          </div>
          <div className='col-md-3'>
            <Blurb box1="JPG TO PDF" test="Paragraph " blurbody="Upload images and receive as a PDF download each page as an image" test="Pdf Creator" subtitle='Pdf Tools' />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-12 text-center'>
            <button type="button" class="btn btn-primary all-tool-button"> All Tools</button>

          </div>
        </div>
      </div>


      <div className='main-container container-fluid  free-tools-section'>
        <div className='row mt-5 free-usual-row'>
          <div className='col-md-12 '>
            <h2 class="usual-text">Free Tools You'd Usually Pay For</h2>
          </div>
        </div>
        <div className='row mt-5 free-usual-row'>
          <div className='col-md-6 text-left'>

            <div class="m-mt-8 mt_24">
              <p class="gray">No Limits, No Sign-Up</p>
              <p class="gray mt_8">Here's our featured tools</p>
            </div>

          </div>
          <div className='col-md-6 text-right'>

            <button type="button" class="btn btn-primary arrow-left-btn arrow-btn"> <i class="bi bi-arrow-left arrow-sign"></i></button>&nbsp;
            <button type="button" class="btn btn-primary arrow-right-btn arrow-btn"> <i class="bi bi-arrow-right arrow-sign"></i></button>

          </div>
        </div>
      </div>

      <div className='main-container container-fluid  preset-section'>
        <div className='row pt-3'>
          <div className='col-md-4'>
            <Preset descc="PDF Creater" presetbd="Create a PDF quickly and easily with our free PDF creator" pic="./pic1.png" />
          </div>
          <div className='col-md-4'>
            <Preset descc="Background Remover" presetbd="Remove or change the background on a photo" pic="./pic2.png" />
          </div>
          <div className='col-md-4'>
            <Preset descc="Photo Cleanup" presetbd="Use AI to remove unwanted objects, items, people from an image" pic="./pic3.png" />
          </div>

        </div>
      </div>

      <div className='main-container container-fluid  hero-image-section'>
        <div className='row pl-10 pr-5'>
          <div className='col-md-6 my-auto'>
            <h2 class="support-tiny-class  text-white">
              <nobr>Support TinyWow</nobr></h2>
            <p className='text-white fw-bold mt-4'>TinyWow is 100% free to use (even OCR), 
            with no pesky registration required. For our most loyal supporters, a $3.99/month plan unlocks an ad and captcha free experience.</p>
            <button type="button" class="btn support-us-btn"> Support Us</button>

          </div>
          <div className='col-md-6 text-center'>
            <img src='./hero.png' alt="" className='hero-img' />
          </div>

        </div>
      </div>

      <div className='main-container container-fluid  footer-before-section'>
        <div className='row p-10'>
          <div className='col-md-4 '>
            <img src='./logo-2.png' alt="" className='logo-2-img' />
            <p className='fw-bold mt-3 provide-text'>TinyWow provides free online conversion, pdf, and other handy tools to help you solve problems of all types. All files both processed and unprocessed are deleted after 1 hour</p>
          </div>
          <div className='col-md-2'>
          <h4 className='last-h4'>Navigate</h4>
          <p className='fw-bold mt-3 provide-text'>Home</p>
          <p className='fw-bold mt-3 provide-text'>Privacy Policy</p>
          <p className='fw-bold mt-3 provide-text'>TOS</p>
          <p className='fw-bold mt-3 provide-text'>Contact</p>

          </div>

          <div className='col-md-2'>
          <h4 className='last-h4'>Tools</h4>
          <p className='fw-bold mt-3 provide-text'>Remove Background from Image</p>
          <p className='fw-bold mt-3 provide-text'>Merge PDF</p>
          <p className='fw-bold mt-3 provide-text'>PDF to JPG</p>
          <p className='fw-bold mt-3 provide-text'>JPG to PDF</p>

          </div>
          <div className='col-md-2'>
          <h4 className='last-h4 invisible '>Tools</h4>
          <p className='fw-bold mt-3 provide-text'>Edit PDF</p>
          <p className='fw-bold mt-3 provide-text'>Compress PDF</p>
          <p className='fw-bold mt-3 provide-text'>Split PDF</p>
          <p className='fw-bold mt-3 provide-text'>Word to PDF</p>

          </div>
          <div className='col-md-2'>
          <h4 className='last-h4 invisible'>Tools</h4>
          <p className='fw-bold mt-3 provide-text'>PDF to Excel</p>
          <p className='fw-bold mt-3 provide-text'>HEIC to JPG</p>
          <p className='fw-bold mt-3 provide-text'>Resize Image Dimensions</p>
          <p className='fw-bold mt-3 provide-text'><a href="#">Others</a></p>

          </div>
          
        
          

        </div>
      </div>



    </>



  )
}
export default NavbarNew;