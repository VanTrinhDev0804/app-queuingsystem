import { Form, Input, Button, Space } from 'antd';
import { useState } from 'react';

import { Link } from 'react-router-dom'
import iconErr from '../../assets/icon/errlogin.png'

const FormLogin = () => {
    const [checkUser, setCheckUser] = useState(true);

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);

    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Tên đăng nhập *"
                name="username"
                className='lableInput'
            >
                <Input required />
            </Form.Item>
            <Form.Item
                label="Mật khẩu *"
                name="password"

            >
                <Input
                    type="password"
                    required
                />
            </Form.Item>
            <Form.Item >
                {
                    checkUser ?
                        <>
                            <Link className="login-form-forgot" to={`/login/forgot-password`}>
                                Quên mật khẩu?
                            </Link>
                        </> :
                        <div className='login__Status'>
                            <img src={iconErr} />
                            <span>
                                Sai mật khẩu hoặc tên đăng nhập
                            </span>
                        </div>

                }

            </Form.Item>

            <Form.Item >
                <div className='btn-group'>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Đăng nhập
                    </Button>

                    {
                        !checkUser ?
                            <>
                                <Link className="login-form-forgot" to={`/login/forgot-password`}>
                                    Quên mật khẩu?
                                </Link>
                            </> : ""
                    }


                </div>


                {/* Or <a href="">register now!</a> */}
            </Form.Item>
        </Form>
    );
};

export default FormLogin






