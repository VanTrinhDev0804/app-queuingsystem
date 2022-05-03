import { Form, Input, Button, Space } from 'antd';

import { Link } from 'react-router-dom'


const FormForgotPassword = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };


    return (
        <Form
            className="Formforgort_Password"
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <h3>Đặt lại mật khẩu</h3>
            <Form.Item
                label="Vui lòng nhập email để đặt lại mật khẩu của bạn *"
                name="email"
                className='lableInput'
            >
                <Input required />
            </Form.Item>
            <Form.Item >
                <div className='btn-group'>
                    <Button type="primary" className="login-form-button btn-out">
                        <Link to={`/login`}>
                            Hủy
                        </Link>
                    </Button>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        <Link to={`/reset-password`}>
                            Tiếp tục
                        </Link>
                    </Button>
                </div>


                {/* Or <a href="">register now!</a> */}
            </Form.Item>
        </Form>
    );
};

export default FormForgotPassword






