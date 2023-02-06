
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import OurServices from '../components/Our Services/OurServices'
import WhyUs from '../components/WhyUs/WhyUs'
import Testimonial from '../components/Testimonial/Testimonial'
import Banner from '../components/CTA Banner/Banner'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'

const LandingPage = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <OurServices/>
    <WhyUs/>
    <Testimonial/>
    <Banner/>
    <FAQ/>
    <Footer/> 
    </div>
    
  )
}

export default LandingPage