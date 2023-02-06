import React from 'react'
import { Card , Row, Col} from 'react-bootstrap'
import "./DetailSewa.css"


const Pencarianmu = () => {
  return (
    <div className='HasilPencarinmuSeaction'>
        <div className='HasilPencarianmuHeader'>
        <div className="container" id="containerPencarianmuSearchBox">
            <Card className='cardPencarianmuSearchBox'>
            <Row className='pencarianmuTittle'>
                <Col>
                <h5>  Pencarianmu</h5>
                </Col>
            </Row>
            <Row className='containerPencarianmuSearchBox'>
                <Col className='col-3'>
                    <div className='cariMobilInput' >
                    <div class="mb-3">
                        <label for="NamaMobil" className="form-label">Nama Mobil</label>
                        <input type="text" className="form-control" id="inputNamaMobil" aria-describedby="" placeholder='Cari nama/tipe mobil'/>
                        
                    </div>
                </div>
                </Col>
                <Col className= "col-3">
                    <div class="kapasitasMobil">
                        <label for="NamaMobil" class="form-label">Kategori</label>
                        <select className="form-select" id="inputKapasitasMobil" aria-label="Example select with button addon">
                            <option value="" disabled selected hidden >Masukan Kapasitas Mobil</option>
                            <option value="4orang">2-4 orang</option>
                            <option value="6orang">4-6 orang</option>
                            <option value="8orang">6-8 orang</option>
                        </select>
                    </div>
                </Col>
                <Col className='col-3' id="inputHarga">
                    <div class="hargaMobil">
                        <label for="rangeHargaMobil" class="form-label">Harga</label>   
                        <select className="form-select"  aria-label="Example select with button addon">
                            <option value="" disabled selected hidden >Masukan Harga Sewa per Hari</option>
                            <option value="1">Kurang dari Rp.400.000`</option>
                            <option value="2">Rp.400.000 - Rp.600.000</option>
                            <option value="3">Lebih dari Rp.600.000</option>
                        </select>
                    </div>
                </Col>
                <Col className='col-2' id="inputStatus">
                    <div class="StatusMobil">
                    <label for="StatusSewaMobil" class="form-label">Status</label>   
                    <select className="form-select"  aria-label="Example select with button addon">
                        <option value="1">Disewa</option>
                        <option value="2">Tidak di Sewa</option>
                    </select>
                </div>
               
                </Col>
                <Col className='col-1'>
                <button type="button" class="btn btn-outline-primary rounded" id='buttonEdit'>
                    Edit
                </button>
                </Col>
            </Row>
            </Card>
           
        </div>
        </div>
        
       
       <div className="HasilPencarianmuContent">
       <div className="container">
        <Row>
            <Col className='col-7'>
                <Card className="cardTentangPaket">
                    <p>Tentang Paket</p>
                </Card>
            </Col>
            <Col className='col-5'>
                <Card className='cardGambarMobil'>
                    <p>Gambar Mobil</p>
                </Card>
            </Col>
        </Row>
            
        </div>
       </div>
    </div>
  )
}

export default Pencarianmu