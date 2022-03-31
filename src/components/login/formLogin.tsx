import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom'
const FormLogin = () => {
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
        label = "Tên đăng nhập *"
        name="username"
        className='lableInput'
      >
        <Input placeholder="Username" className='form_Input' />
      </Form.Item>
      <Form.Item
        label = "Mật khẩu *"
        name="password"
        className='lableInput'

      >
        <Input
          type="password"
          placeholder="Password"
          className='form_Input'
        />
      </Form.Item>
      <Form.Item>
    
        <Link className="login-form-forgot" to={`/?login/forgot-password`}>
          Quên mật khẩu?
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Đăng Nhập
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
  );
};

export default FormLogin






