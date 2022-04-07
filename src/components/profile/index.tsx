import React from 'react'
import { Layout, Avatar, Upload, Form, Input, Image } from 'antd';


import './styles.scss'

const {Content} = Layout;

const FormProfile = () => {
  return (
    <Content>
    <div className="Users-Profile">
        <div className="Users-Profile_Avatar">
            <Avatar size={248} src={<Image src={require('../../assets/img/profile/avatar.png')} />} />
            <Upload className="Upload-avatar">
                <img src={require('../../assets/icon/profile/iconCamera.png')} alt='' />
            </Upload>
            <h2>Lê Quỳnh Ái Vân</h2>
        </div>
        <div className="Users-Profile_Form">
            <Form
                layout="vertical"
                className='Users-Profile_FormLeft'
            >
                <Form.Item
                    label="Tên người dùng"
                    name="Fullname"
                     initialValue={'Lê Quỳnh Ái Vân'}
                >
                    <Input type="text" name="Fullname" disabled />
                </Form.Item>
                <Form.Item
                    label=" Số điện thoại"
                    name="Phone"
                    initialValue={'0767375921'}
                >
                    <Input type="text" name="Phone" disabled />
                </Form.Item>
                <Form.Item
                    label="Email:"
                    name="Email"
                    initialValue={'adminSSO1@domain.com'}
                >
                    <Input type="text" name="Email"  disabled />
                </Form.Item>

            </Form>

            <Form
                layout="vertical"
                className='Users-Profile_FormRight'
            >
                <Form.Item
                    label="Tên đăng nhập"
                    name="Username"
                    initialValue={'lequynhaivan01'}
                >
                    <Input type="text" name="Username" disabled />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    initialValue={'311940211'}
                >
                    <Input type="text" name="password"  disabled />
                </Form.Item>
                <Form.Item
                    label="Vai trò:"
                    name="role"
                    initialValue={'Kế toán'}
                >
                    <Input type="text" name="role"  disabled />
                </Form.Item>

            </Form>

        </div>
    </div>
</Content>

  )
}

export default FormProfile