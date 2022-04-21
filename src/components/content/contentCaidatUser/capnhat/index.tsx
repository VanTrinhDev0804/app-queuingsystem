import React, { useState } from 'react'
import { Select, Button, Form, Input } from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './styles.scss'


const ContentCapNhatTaikhoan = () => {
    const { Option } = Select




    const onChange = (e: any) => {

        let name = e.target.name;
        let value = e.target.value
        let obj = {
            [name]: value
        }

    }

    return (
        <div className="ContentCapNhatTK">

            <div className="ContentCapNhatTK-Form">
                <h2>Thông tin tài khoản</h2>
                <div className="ContentCapNhatTK-Form_Input">

                    <Form
                        layout="vertical"
                        className='ContentCapNhatTK-Form_InputLeft'
                        onChange={onChange}
                    >
                        <Form.Item
                            label="Họ tên"
                            name="hoten"
                        >

                            <Input
                                type="text"
                                name="hoten"
                                placeholder='Nhập họ tên'
                            />

                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                        >
                            <Input
                                type="text"
                                name="phone"
                                placeholder='Nhập số điện thoại'
                            />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                        >
                            <Input
                                type="text"
                                name="Email"
                                placeholder='Nhập địa email'
                            />
                        </Form.Item>
                        <Form.Item
                            label="Vai trò"


                        >
                            <Select
                                style={{ width: 540 }}
                                bordered={false}
                                placeholder="Chọn vai trò"

                            >
                                <Option value="ketoan">Kế toán</Option>
                                <Option value="quanly">Quản lý</Option>
                                <Option value="admin">Admin</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                        >
                        <p className='text-notify-role'>Là những trường thông tin bắt buộc</p>
                        </Form.Item>
                    </Form>

                    <Form
                        layout="vertical"
                        className='ContentCapNhatTK-Form_InputRight'
                        onChange={onChange}
                    >

                        <Form.Item
                            label="Tên đăng nhập:"
                            name="username"
                        >
                            <Input type="text"
                                name="username"
                                placeholder='Nhập tên đăng nhập'
                            />
                        </Form.Item>
                        <Form.Item
                            label="Mật khẩu"
                            name="password"

                        >
                            <Input
                                type="password"
                                name="password"
                                placeholder='Nhập mật khẩu'
                            />
                        </Form.Item>
                        <Form.Item
                            label="Nhập lại mật khẩu"
                            name="confirm-password"

                        >
                            <Input
                                type="password"
                                name="confirm-password"
                                placeholder='Nhập lại mật khẩu'
                            />
                        </Form.Item>
                        <Form.Item
                            label="Tình trạng"
                        >
                            <Select
                                style={{ width: 540 }}
                                bordered={false}
                                defaultValue ="all"
                            >
                                <Option value="all">Tất cả</Option>
                                <Option value="true">Hoạt động</Option>
                                <Option value="false">Ngưng hoạt động</Option>

                            </Select>
                        </Form.Item>

                    </Form>
                </div>

               
            </div>

            <div className='ContentCapNhatTK-btn-group'>
                <Button
                    type="primary"
                    className="btn-cancel" >

                    Hủy

                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-continue"
                >
                    <Link to={'/thietbi/chitiet'}>
                        Thêm 
                    </Link>

                </Button>


            </div>


        </div>
    )
}

export default ContentCapNhatTaikhoan