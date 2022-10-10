import React, { useContext } from 'react'
import { Context } from '../index';
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useHistory } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {Button, Container} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
     
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={{SHOP_ROUTE}}>ShopMe</NavLink>
                    {user.isAuth ? 
                        <Nav className="ml-auto">
                            <Button variant={'outline-light'} onClick={() => { console.log(user.isAuth); history.push(ADMIN_ROUTE)}}>Admin panel</Button>
                            <Button className={'ml-3'} onClick={logOut}>Sign out</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button onClick={() => history.push(LOGIN_ROUTE)}>Sign in</Button>
                        </Nav>

                    }
            </Container>
        </Navbar>
    );
})

export default NavBar;
