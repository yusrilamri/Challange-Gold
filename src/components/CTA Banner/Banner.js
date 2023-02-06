import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className='container'>
        <div className='cardBanner'>
            <div>
                <h2 className='bannerTittle'>Sewa Mobil di Kota Tegal Sekarang</h2>
                <p className='bannerContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="bannerButton">
                <a href="/listCars">
                    <button type="button" className="btn btn-success">Mulai Sewa Mobil</button>
                </a>
            </div>
            
        </div>
    </div>

  )
}

export default Banner