import React from 'react'
import Hero2 from '../components/Hero/Hero2'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import CariMobil from '../components/CariMobil/CariMobil'

const ListCars = () => {
  return (
    <div>
        <Navbar/>
        <Hero2/> 
        <CariMobil/>  
        <Footer/>
    </div>
  )
}

export default ListCars