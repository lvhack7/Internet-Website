import React, { useEffect, useState } from 'react'
import {Button, Container, Col, Image, Row} from 'react-bootstrap' 
import { useParams } from 'react-router-dom'
import {fetchOneDevice} from '../http/deviceApi'

function App() {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  return (
    <Container fluid className="mt-3">
        <Row>
            <Col md={4} className='m-5'>
                <Image width={500} height={500} src={process.env.REACT_APP_API_URL + device.img}/>
            </Col>
            <Col md={4}>
                <Row className="m-5 d-flex flex-column align-items-left">
                  <div>
                    <h3>{device.name}</h3>
                      <div className='mt-4'>
                        <div>Rating: <span className='text-secondary'>{device.rating} <span style={{color: "yellow"}}><i className="fas fa-star"></i></span></span> <div style={{float: 'right', cursor: 'pointer'}}><i className="far fa-heart"></i> Add to favorites</div></div>
                        <div style={{width: 400, height: 10, borderBottom: '1px solid grey'}}></div>
                    </div>
                  </div>
                  <div className="mt-4" style={{fontSize: 30}}>{device.price}$</div>
                  <div className="d-inline mt-4">
                    <Button className="mr-4 text-uppercase" variant={'outline-warning'}>Add to the basket</Button>
                    <Button className="text-uppercase">Buy now!</Button>
                  </div>
                  <div style={{fontSize: 17, fontWeight: 500}} className="mt-4">Characteristics: </div>
                  <ul className="list-group mt-4">
                    {device.info.map(info => 
                        <div>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            {info.title}
                            <span className="badge bg-primary rounded-pill" style={{color: 'white'}}>{info.des}</span>
                          </li>
                        </div>
                      )}
                  </ul>
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
