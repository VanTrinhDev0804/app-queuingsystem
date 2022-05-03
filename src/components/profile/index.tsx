import React, { useEffect } from 'react'
import { Layout, Avatar, Upload, Form, Input, Image } from 'antd';


import './styles.scss'
import { useAppSelector } from 'redux/hooks';
import { useHistory } from 'react-router-dom';
import { IProfile } from 'types';

const {Content} = Layout;


const FormProfile = () => {
    
    const {currentUser} = useAppSelector(state =>state.auth)
    const localUser :IProfile[] =JSON.parse(window.localStorage.getItem('author') ||"")
    const currentValue =  !localUser ? currentUser?.[0] : localUser[0]
    
   

  return (
    <Content>
    <div className="Users-Profile">
        <div className="Users-Profile_Avatar">
            <Avatar size={248} src={<Image src={currentValue?.avatar} />} />
            <Upload className="Upload-avatar">
                <img src={require('../../assets/icon/profile/iconCamera.png')} alt='' />
            </Upload>
            <h2>{currentValue?.name}</h2>
        </div>
        <div className="Users-Profile_Form">
            <Form
                layout="vertical"
                className='Users-Profile_FormLeft'
            >
                <Form.Item
                    label="Tên người dùng"
                    name="Fullname"
                     initialValue={currentValue?.name}
                >
                    <Input type="text" name="Fullname" disabled />
                </Form.Item>
                <Form.Item
                    label=" Số điện thoại"
                    name="Phone"
                    initialValue={currentValue?.phone}
                >
                    <Input type="text" name="Phone" disabled />
                </Form.Item>
                <Form.Item
                    label="Email:"
                    name="Email"
                    initialValue={currentValue?.email}
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
                    initialValue={currentValue?.username}
                >
                    <Input type="text" name="Username" disabled />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    initialValue={currentValue?.password}
                >
                    <Input type="text" name="password"  disabled />
                </Form.Item>
                <Form.Item
                    label="Vai trò:"
                    name="role"
                    initialValue={currentValue?.role}
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