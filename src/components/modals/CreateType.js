import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import {Form, Button} from 'react-bootstrap'
import {addType} from '../../http/deviceApi'

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const createType = () => {
        addType({name: value}).then(data => {
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
            Add new type
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Enter name of type"
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'default'} onClick={onHide}>Close</Button>
            <Button onClick={createType}>Add</Button>
        </Modal.Footer>
    </Modal>
    );
}

export default CreateType;