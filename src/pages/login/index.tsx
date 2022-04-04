import React from 'react'

import 'antd/dist/antd.css';
import logo from '../../assets/logo/logoPageLogin/Logoalta.png'
import bg from '../../assets/img/imgLogin/imglgpage1.jpg' 
import { Row, Col } from 'antd'
import LoginForm from 'components/login/formLogin';
import './styles.scss'
import { Link, useParams } from 'react-router-dom';
import { IParams } from 'types';
import FormLogin from 'components/login/formLogin';
import FormForgotPassword from 'components/login/formForgotPass';
import FormResetPassword from 'components/login/formResetPass';



const Login = () => {

    const { control } : IParams= useParams();
  
  return (
    <div className='login'>
        <Row>
          <Col span={8} className='login-LayoutLeft'>
              <Link to={`/login`}>
              <img  src={logo} />
              </Link>
             
              <div className='login-LayoutLeft-FormLogins'>
                
                { !control ? <FormLogin/> : (control === 'forgot-password' ? <FormForgotPassword/>: <FormResetPassword/>)}


              </div>
          </Col>
          <Col span={16}  className='login-LayoutRight'>
              <img className='login-LayoutRight-Image' src={bg}/>
              <div className="login-LayoutRight-Title">
                  <p className="login-LayoutRight-Title_ht" >
                      Hệ thống 
                  </p>
                  <p className="login-LayoutRight-Title_ql">
                    Quản lý bán hàng
                    </p>
              </div>
          </Col>
        </Row>

    </div>
  )
}

export default Login
