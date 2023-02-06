import React from 'react'
import { Card, Col, Row, CardGroup, } from 'react-bootstrap'
import { useState } from 'react'
import "./Testimonial.css"

const Testimonial = () => {
  const [active, setActive ] = useState(false);
  const handleClick = () => {
        setActive(!active)
    };

    const [active1, setActive1 ] = useState(false);
    const handleClick1 = () => {
          setActive1(!active1)
      };

  
  return (
    <div className='testimonialContainer' id='Testimonial'>
      <div className="container">
        <div className='testimonialHeader '>
          <h2>Testimonial</h2>
          <p className='fw-bold'>Berbagai review positif dari para pelanggan kami</p>
        </div>
      </div> 
        <div className="container position-relative ">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Card className="testimonial1">
                  <div className="row">
                        <div className="col-md-3">
                          <img src="assets/image/Testimonial2.svg" className="testimonialImg" alt="..."/>
                        </div>
                        <div className="col-md-9">
                          <div className="card-body">
                            <div className ="testimonialRating">
                              <img src='assets/image/Rate.png'></img>
                            </div>
                              <p className="card-text1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”.</p>
                              <p className="card-text">John Dee 32, Bromo</p>
                          </div>
                        </div>
                    </div>
                </Card>
              </div>
              <div className="carousel-item">
                <Card className='testimonial2'>
                  <div className='row'>
                        <div className="col-md-3">
                          <img src="assets/image/Testimonial1.svg" className="testimonialImg" alt="..."/>
                        </div>
                          <div className="col-md-9">
                            <div className="card-body">
                              <div className ="testimonialRating">
                                  <img src='assets/image/Rate.png'></img>
                                </div>
                              <p className="card-text1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                              <p className="card-text">John Dee 32, Bromo</p>
                            </div>
                          </div>
                  </div>
                </Card>
                </div>
            </div>
                <div className='row'>
                    <div className='col-md-1'>
                      <button className="carousel-control-prev position-absolute" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" id='buttonTestimonial'>
                        <button class="btn btn-dark rounded-circle" aria-hidden="true" alt='Left Button' onClick={handleClick} style={{backgroundColor: active ? "green" : "white"}}>
                          <img class="arrowPrev" src="assets/image/PrevArrow.svg"></img>
                        </button>
                      </button>
                    </div>
                    <div className='col-md-1'>
                      <button className="carousel-control-next position-absolute " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" id="buttonTestimonial">
                        <button className="btn btn-dark rounded-circle" aria-hidden="true" alt='Right Button' onClick={handleClick1} style={{backgroundColor: active1 ? "green" : "white"}}>
                         <img class="arrowPrev" src="assets/image/NextArrow.svg" ></img>
                        </button>
                      </button>
                    </div>
                </div>
          </div>
         </div>

    </div>
      
    
  )
}


export default Testimonial