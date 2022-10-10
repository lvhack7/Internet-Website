import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import {Form, Button, Dropdown, Row, Col} from 'react-bootstrap'
import { Context } from '../..';

function CreateDevice({show, onHide}) {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Add new device
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className="mt-3">
                    <Dropdown.Toggle>Choose a type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type => 
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-3">
                    <Dropdown.Toggle>Choose a brand</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand => 
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control className="mt-3" placeholder="Enter name of device"/>
                <Form.Control className="mt-3" type="number" placeholder="Enter the price"/>
                <Form.Control className="mt-3" type="file"/>
                <hr/>
                <Button
                    variant={'warning'}
                    onClick={addInfo}
                >
                    Add new property
                </Button>
                {info.map(i => 
                    <Row className="mt-4" key={i.number}>
                        <Col xs={12} md={4}>
                            <Form.Control 
                                placeholder="Enter the title"
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Control 
                                placeholder="Enter the description"
                            />
                        </Col>
                        <Col>
                            <Button variant={'danger'} onClick={() => removeInfo(i.number)}><i className="fas fa-times"></i></Button>
                        </Col>

                    </Row>
                )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'default'} onClick={onHide}>Close</Button>
            <Button>Add</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default CreateDevice;