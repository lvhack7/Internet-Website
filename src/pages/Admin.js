import React, { useState } from 'react'
import { Container, Button, } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
  const [typeVisible, setTypeVisisble] = useState(false)
  const [brandVisisble, setBrandVisisble] = useState(false)
  const [deviceVisible, setDeviceVisisble] = useState(false)
  return (
    <Container className="d-flex flex-column">
      <div className="m-auto">Admin panel</div>
      <Button 
        className="mt-2" 
        variant={'warning'}
        onClick={() => setTypeVisisble(true)}
      >
        Add type
      </Button>
      <Button 
        className="mt-2"
        onClick={() => setBrandVisisble(true)}
      >
        Add brand
      </Button>
      <Button 
        className="mt-2" 
        variant={'outline-success'}
        onClick={() => setDeviceVisisble(true)}
      >
          Add device
      </Button>

      <CreateBrand show={brandVisisble} onHide={() => setBrandVisisble(false)}/>
      <CreateType show={typeVisible}  onHide={() => setTypeVisisble(false)}/>
      <CreateDevice show={deviceVisible}  onHide={() => setDeviceVisisble(false)}/>
    </Container>
  );
}

export default Admin;
