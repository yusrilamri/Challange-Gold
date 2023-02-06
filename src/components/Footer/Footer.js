import React from 'react'

import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="navbarFooter">
                                <a href='/#OurServices'>Our services</a>
                            </p>
                        </div>
                        <div className="col-md-12">
                            <p className="navbarFooter">
                                <a href='/#WhyUs'>Why Us</a>
                            </p>
                        </div>
                        <div className="col-md-12">
                            <p className="navbarFooter">
                                <a href="/#Testimonial">Testimonial</a>
                            </p>
                        </div>
                        <div className="col-md-12">
                            <p className="navbarFooter">
                                <a href="/#FAQ">FAQ</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <p>Connect with us</p>
                        <img className="imgIcon" src='assets/image/icon_facebook.png'>
                        </img>
                        <img className="imgIcon" src='assets/image/icon_instagram.png'>
                        </img>
                        <img className="imgIcon" src='assets/image/icon_twitter.png'>
                        </img>
                        <img className="imgIcon" src='assets/image/icon_mail.png'>
                        </img>
                        <img className="imgIcon" src='assets/image/icon_twitch.png'>
                        </img>
                </div>
                <div className='col-md-3'>
                    <p>Copyright Binar 2022</p>
                    <img src='./assets/image/Logo_Brand.png' id='footerBrand' href="#"></img>
                </div>
            </div>
        </div>
    </div>
   
       
  )
}

export default Footer