import React from 'react' ;
import LandingPage from './Pages/LandingPage';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ListCars from './Pages/ListCars';
import HasilPencarian from "./Pages/HasilPencarian"
import DetailSewaPaketMobil from './Pages/DetailPaketMobil';

import 'bootstrap/dist/css/bootstrap.min.css' ;
import 'bootstrap/dist/js/bootstrap.min.js'; 


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/listCars' element={<ListCars/>}/>
        <Route path='/hasilPencarian' element={<HasilPencarian/>}/>
        <Route path='/DetailSewaPaketMobil' element={<DetailSewaPaketMobil/>}/>
      </Routes>
      </BrowserRouter>

    </>
    
  )
}
export default App 