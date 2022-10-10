import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {observer} from 'mobx-react-lite'
import { Context } from '../index';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    /*const types = []

    for(var i=0; i<device.types.length; i++) {
        types.push(<ListGroup.Item key={device.types[i].id}>{device.types[i].name}</ListGroup.Item>)
    }*/
    //console.log(device.types.map(type => console.log(type.name, type.id)))
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
})


export default TypeBar;