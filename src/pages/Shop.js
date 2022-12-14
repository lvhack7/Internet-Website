import { observer } from 'mobx-react-lite';
import React, { useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import { Context } from '../index';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceApi';

const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices().then(data => device.setDevices(data.rows))
  }, [])

  return (
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  );
})

export default Shop;
