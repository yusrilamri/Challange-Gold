import React from 'react'
import "./Navbar.css"




const Navbar = () => {
  return (

<div className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <img src='./assets/image/Logo_Brand.png' id='brandLogo' href="#"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <a className="navbar-toggler-icon"></a>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body "> 
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" >
          <li className="nav-item">
            <a className="nav-link" href="/#OurServices">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#WhyUs">Why Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#Testimonial">Testimony</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#FAQ">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
      
  </div>
</div>
)
}


export default Navbar