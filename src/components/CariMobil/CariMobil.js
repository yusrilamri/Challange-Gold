import React, { useEffect,useState } from 'react'
import { Card , Row, Col, Button} from 'react-bootstrap'
import "./CariMobil.css"
import axios from 'axios'




const CariMobil = () => {


    const [getCars,setgetCars]=useState ([])


    const [selectCar, setSelectCar] = useState([])

    const [search, setSearch] = useState({
        name: null
    })

    const onSearchChange = (ev, key) => {
      setSearch((prevState) => {
      const data = prevState;
      data[key] = ev.target.value;

      return data;
    })
  }

    const searchCars = async () => {
       
        try {
            const config = {
                headers: {
                    access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTY4OTU2MX0.lAXE3dxjmg08smUOEftOZlktLW3LYNl84F3G0dy7PqY'
                },
                params:{
                    name: search.name
                  }
            }
            const {data}= await axios.get(`${process.env.REACT_APP_BASE_BINAR_URL}admin/v2/car`, config);

            console.log(data.cars);
            setSelectCar(data.cars)
        }
        catch (error) {
            console.log(error);
        }
    }   

    useEffect (()=>{
            searchCars ();
    }, []
    )

  return (
    <div className='CariMobil'>
        <div className="container">
            <Card className='cardCariMobil'>
            <Row className='containerCariMobil'>
                <Col className='col-2'>
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
                <Col className='col-3'>
                    <div class="hargaMobil">
                        <label for="rangeHargaMobil" class="form-label">Harga</label>   
                        <select className="form-select" id="inputKapasitasMobil" aria-label="Example select with button addon">
                            <option value="" disabled selected hidden >Masukan Harga Sewa per Hari</option>
                            <option value="1">Kurang dari Rp.400.000</option>
                            <option value="2">Rp.400.000 - Rp.600.000</option>
                            <option value="3">Lebih dari Rp.600.000</option>
                        </select>
                    </div>
                </Col>
                <Col className='col-2'>
                    <div class="StatusMobil">
                    <label for="StatusSewaMobil" class="form-label">Status</label>   
                    <select className="form-select" id="inputKapasitasMobil" aria-label="Example select with button addon">
                        <option value="1">Disewa</option>
                        <option value="2">Tidak di Sewa</option>
                    </select>
                </div>
               
                </Col>
                <Col className='col-2'>
                <button type="button" class="btn btn-primary rounded" id='buttonCariMobil' href="/HasilPencarian">Cari mobil</button>
                </Col>
            </Row>
            </Card>
            <Card className="cardListFromApi">

<div className='container'>
    <div className='row d-flex'>
    {
      selectCar.map((item) => (
        <div key={`key-${item.id}`} className="col-12 col-lg-4 mb-3">
          <Card className="h-100">
            <Card.Img
              src={item.image}
              className="d-lg-block card-img-custom"
            />
            <Card.Body>
              <div className="row">
              <p className="pw-medium">{item.name}</p>
                  <strong className='pw-bold'>{item.price} / hari</strong>
                  <p className="pw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>
              <Button>
                Pilih Mobil
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))
        
    }

    </div>


    </div>

</Card>

        
        </div>

       
    </div>
  )
}

export default CariMobil