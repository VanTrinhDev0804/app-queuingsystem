import React, { useState } from 'react'
import { Select, Button, Form, Input, Checkbox } from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './styles.scss'


const ContentCapNhatThietbi = () => {
    const { Option } = Select
    const { TextArea } = Input


    const onCheckedChange= (checkedValues : any)=> {
        console.log('checked = ', checkedValues);
      }

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
                            label="Mã dịch vụ:"
                            name="maDichvu"
                            initialValue={201}
                        >

                            <Input
                                type="text"
                                name="maDichvu"
                                placeholder='Nhập mã dịch vụ'
                            />

                        </Form.Item>

                        <Form.Item
                            label="Tên dịch vụ:"
                            name="tenDichvu"
                            initialValue={"Khám tim mạch"}
                        >
                            <Input
                                type="text"
                                name="tenDichvu"
                                placeholder='Nhập tên dịch vụ'
                            />
                        </Form.Item>

                    </Form>

                    <Form
                        layout="vertical"
                        className='ContentCapNhatThietbi-Form_InputRight'
                        onChange={onChange}
                    >

                        <Form.Item
                            label="Mô tả:"
                            name="description"
                            initialValue={"Mô tả dịch vụ"}
                        >
                            <TextArea
                                className='textArea'
                                placeholder="maxLength is 6"
                            />
                        </Form.Item>

                    </Form>
                </div>

                <div className="ContentCapNhatThietbi-Form_roleCapso">
                    <h3>
                        Quy tắc cấp số
                    </h3>
                    <div className="ContentCapNhatThietbi-Form_roleCapso-GroupCheckBox">
                        <Checkbox.Group style={{ width: '100%' }} onChange={onCheckedChange}>

                            <Checkbox value="auto">
                                Tăng tự động từ: <span className='number'>0001</span> đến <span className='number'> 9999</span>
                            </Checkbox>
                            <Checkbox value="Prefix">
                                Prefix: <span className='number space'>0001</span>
                            </Checkbox>
                            <Checkbox value="Sunfix" >
                                Sunfix: <span className='number space'>0001</span>
                            </Checkbox>
                            <Checkbox value="reset" >
                                Reset mỗi ngày
                            </Checkbox>


                        </Checkbox.Group>

                    </div>
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
                    <Link to={'/dichvu'}>
                        Cập nhật
                    </Link>

                </Button>


            </div>


        </div>
    )
}

export default ContentCapNhatThietbi