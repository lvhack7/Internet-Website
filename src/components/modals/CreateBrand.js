import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import {Form, Button} from 'react-bootstrap'
import { addBrand } from '../../http/deviceApi';

function CreateBrand({show, onHide}) {
    const [value, setValue] = useState('')

    const createBrand = () => {
        addBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                        placeholder="Enter name of brand"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'default'} onClick={onHide}>Close</Button>
                <Button onClick={createBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;