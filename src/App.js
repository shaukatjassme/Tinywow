import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import NavbarNew from './Components/NavbarNew';
import Headcomp from './Components/Headcomp';
import  Footercomp  from './Components/Footercomp';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
     <Headcomp />
     <NavbarNew/>
     <Footercomp />
     </>

  );
}

export default App;
