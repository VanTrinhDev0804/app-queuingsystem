import React, { useState } from 'react'
import { Select, Button, Form, Input } from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './styles.scss'


const ContentCapNhatThietbi = () => {
    const { Option } = Select
  
    const listDV = [
        'Khám tim mạch',
        'Khám sản phụ khoa',
        'Khám răng hàm mặt',
        'Khám tai mũi họng',
        'Khám hô hấp',
        'Khám tổng quát',
    ]
    const optionSelect = listDV.map((text, key) => {
        return (
            <Option key={key}>
                {text}
            </Option>
        )
    })

   
    const onChange = (e: any) => {

        let name = e.target.name;
        let value = e.target.value
        let obj = {
            [name]: value
        }
      
    }

    return (
        <div className="ContentCapNhatThietbi">

            <div className="ContentCapNhatThietbi-Form">
                <h2>Thông tin thiết bị</h2>
                <div className="ContentCapNhatThietbi-Form_Input">

                    <Form
                        layout="vertical"
                        className='ContentCapNhatThietbi-Form_InputLeft'
                        onChange={onChange}
                    >
                        <Form.Item
                            label="Mã thiết bị:"
                            name="maTB"
                           initialValue={"KIO_01"}
                        >

                            <Input
                                type="text"
                                name="maTB"
                                placeholder='Nhập mã thiết bị'
                               
                            />

                        </Form.Item>

                        <Form.Item
                            label="Tên thiết bị:"
                            name="nameTB"
                            initialValue={"Kiosk"}
                        >
                            <Input
                                type="text"
                                name="nameTB"
                                placeholder='Nhập tên thiết bị'
                            />
                        </Form.Item>
                        <Form.Item
                            label="Địa chỉ IP:"
                            name="diachiIP"
                            initialValue={"128.172.308"}
                        >
                            <Input
                                type="text"
                                name="diachiIP"
                                placeholder='Nhập địa chỉ IP'
                            />
                        </Form.Item>

                    </Form>

                    <Form
                        layout="vertical"
                        className='ContentCapNhatThietbi-Form_InputRight'
                        onChange={onChange}
                    >
                        <Form.Item
                            label="Chọn loại thiết bị:"
                        >
                            <Select
                                style={{ width: 540 }}
                                bordered={false}
                                placeholder="Chọn loại thiết bị"
                                defaultValue={"kiosk"}
                            >
                                <Option value="kiosk">Kiosk</Option>
                                <Option value="hethong">Display counter</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Tên đăng nhập:"
                            name="username"
                            initialValue={"Linhkyo01"}
                        >
                            <Input type="text"
                                name="username"
                                placeholder='Nhập tên đăng nhập'
                            />
                        </Form.Item>
                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            initialValue={"CMS"}

                        >
                            <Input
                                type="password"
                                name="password"
                                placeholder='Nhập mật khẩu'
                            />
                        </Form.Item>


                    </Form>
                </div>

                <div className="ContentCapNhatThietbi-Form_SelectDV">
                    <Form
                        layout="vertical"
                    >
                        <Form.Item
                            label="Dịch vụ sử dụng"
                        >
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '1104px' }}
                                placeholder="Nhập dịch vụ sử dụng"
                                defaultValue={listDV}
                            >
                                {optionSelect}
                            </Select>
                        </Form.Item>
                    </Form>
                    <p className='text-notify-role'>Là những trường thông tin bắt buộc</p>
                </div>
            </div>

            <div className='ContentCapNhatThietbi-btn-group'>
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
                    <Link to ={'/thietbi'}>
                        Cập nhật
                    </Link>
                   
                </Button>


            </div>


        </div>
    )
}

export default ContentCapNhatThietbi