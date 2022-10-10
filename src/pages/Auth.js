import React, {useContext, useState} from 'react'
import { Container, Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import { LOGIN_ROUTE, REG_ROUTE } from '../utils/consts';
import { registration, login } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { SHOP_ROUTE } from '../utils/consts';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const history = useHistory()
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if(isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    } catch(e) {
      alert(e.response.data.message)
    }

  }

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight-54}}>      
      <Card style={{width: 600}} className="p-5">
          <h4 className="m-auto">{isLogin ? 'Log in' : 'Create account'}</h4>
          <Form className="d-flex flex-column">
              <Form.Control
                  className="mt-3"
                  placeholder="Введите ваш email..."
                  value={email}
                  onChange={e => setEmail(e.target.value) }
              />
              <Form.Control
                  className="mt-3"
                  placeholder="Введите ваш пароль..."
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value) }
              />
              <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isLogin ?
                  <div>No account? <NavLink to={REG_ROUTE}>Create one!</NavLink></div>
                  :
                  <div>Already have an acount? <NavLink to={LOGIN_ROUTE}>Log in!</NavLink></div>
                }
                <Button variant={'outline-primary'} 
                    className="align-self-end"
                    onClick={click}>
                  {isLogin ? 'Log in' : 'Sign up'}
                </Button>
              </Row>
        </Form>
      </Card>

    </Container>
  );
})

export default Auth;
