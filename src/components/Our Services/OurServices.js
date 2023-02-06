import React from 'react'
import "./OurServices.css"

export const OurServices = () => {
  return (
   <div className='OurServices' id="OurServices">
    <div className="container">
      <div className='row'>
        <div className="col"> 
          <img src="assets/image/Happy Girl.svg" className='OurServicesImage'/>
        </div>
        <div className="col">
                <h3>Best Car Rental for any kind of trip in Tegal!</h3>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                 <ul className="OurServicesList"> 
                    <li id="listOurServices">Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                    <li id="listOurServices">Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                    <li id="listOurServices">Sewa Mobil Jangka Panjang Bulanan</li>
                    <li id="listOurServices">Gratis Antar - Jemput Mobil di Bandara</li>
                    <li id="listOurServices">Layanan Airport Transfer / Drop In Out</li>
                </ul>
        </div>
      </div>
        
     </div>
   </div>
  )
  
}

export default OurServices
