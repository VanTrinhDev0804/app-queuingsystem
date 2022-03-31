import React from 'react'

import 'antd/dist/antd.css';
import logo from '../../assets/logo/logoPageLogin/Logoalta.png' 
import { Row, Col } from 'antd'
import LoginForm from 'components/login/formLogin';
import './styles.scss'

const Login = () => {
  return (
    <div className='PageLogin '>
        <Row>
          <Col span={8} className='LayoutLeft'>
              <img className='Logo' src={logo} />
              <div className='FormLogin'>
                  <LoginForm />
              </div>
          </Col>
          <Col span={16} className='LayoutRight'></Col>
        </Row>

    </div>
  )
}

export default Login
