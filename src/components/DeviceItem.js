import React from "react"
import {useHistory} from 'react-router-dom'
import { Card, Col, Image } from "react-bootstrap"
import {DEVICE_ROUTE} from '../utils/consts'

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 200, cursor: 'pointer'}} border={'light'}>
                <Image height={200} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="mt-1 d-flex justify-content-between">
                    <div className="text-black-50 ">Samsung...</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <i className="far fa-star"></i>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>

        </Col>
    )
}

export default DeviceItem