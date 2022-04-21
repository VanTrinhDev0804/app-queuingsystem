import React, { useState } from 'react'
import { Select, Button, Form, Input, Checkbox } from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './styles.scss'


const ContentCapnhatVaitro = () => {
    const { TextArea } = Input



    const onChange = (e: any) => {

        let name = e.target.name;
        let value = e.target.value
        let obj = {
            [name]: value
        }

    }

    const onCheckedChange = (checkedValues: any) => {
        console.log('checked = ', checkedValues);
    }

    return (
        <div className="ContentCapnhatVaitro">

            <div className="ContentCapnhatVaitro-Form">
                <h2>Thông tin vai trò</h2>
                <div className="ContentCapnhatVaitro-Form_Input">

                    <Form
                        layout="vertical"
                        className='ContentCapnhatVaitro-Form_InputLeft'
                        onChange={onChange}
                    >
                        <Form.Item
                            label="Tên vai trò:"
                            name="tenvaitro"
                        >

                            <Input
                                type="text"
                                name="tenvaitro"
                                placeholder='Nhập tên vai trò'
                            />

                        </Form.Item>

                        <Form.Item
                            label="Mô tả:"
                            name="description"
                        >
                            <TextArea

                                className='textArea'
                                placeholder="Nhập mô tả"
                            />
                        </Form.Item>
                        <Form.Item
                        >
                            <p className='text-notify-role'>Là những trường thông tin bắt buộc</p>
                        </Form.Item>
                    </Form>
                    <Form
                        layout="vertical"
                        className='ContentCapnhatVaitro-Form_InputRight'
                    >
                        <Form.Item
                            label="Phân quyền chức năng:"
                        >
                            <div className="ContentCapnhatVaitro-Form_InputRight-ListNhomChuNang">
                                <div className="ContentCapnhatVaitro-Form_InputRight-ListNhomChuNang-item">
                                    <h2>Nhóm chức năng A</h2>
                                    <div className="ContentCapnhatVaitro-Form_InputRight-GroupCheckBox">
                                        <Checkbox.Group style={{ width: '100%' }} onChange={onCheckedChange}>

                                            <Checkbox value="all">
                                                Tất cả
                                            </Checkbox>
                                            <Checkbox >
                                                Chức năng x
                                            </Checkbox>
                                            <Checkbox value="Sunfix" >
                                                Chức năng y
                                            </Checkbox>
                                            <Checkbox value="reset" >
                                                Chức năng z
                                            </Checkbox>


                                        </Checkbox.Group>

                                    </div>
                                </div>
                                <div className="ContentCapnhatVaitro-Form_InputRight-ListNhomChuNang-item">
                                    <h2>Nhóm chức năng A</h2>
                                    <div className="ContentCapnhatVaitro-Form_InputRight-GroupCheckBox">
                                        <Checkbox.Group style={{ width: '100%' }} onChange={onCheckedChange}>

                                            <Checkbox value="all">
                                                Tất cả
                                            </Checkbox>
                                            <Checkbox >
                                                Chức năng x
                                            </Checkbox>
                                            <Checkbox value="Sunfix" >
                                                Chức năng y
                                            </Checkbox>
                                            <Checkbox value="reset" >
                                                Chức năng z
                                            </Checkbox>


                                        </Checkbox.Group>

                                    </div>
                                </div>

                                <div className="ContentCapnhatVaitro-Form_InputRight-ListNhomChuNang-item">
                                    <h2>Nhóm chức năng A</h2>
                                    <div className="ContentCapnhatVaitro-Form_InputRight-GroupCheckBox">
                                        <Checkbox.Group style={{ width: '100%' }} onChange={onCheckedChange}>

                                            <Checkbox value="all">
                                                Tất cả
                                            </Checkbox>
                                            <Checkbox >
                                                Chức năng x
                                            </Checkbox>
                                            <Checkbox value="Sunfix" >
                                                Chức năng y
                                            </Checkbox>
                                            <Checkbox value="reset" >
                                                Chức năng z
                                            </Checkbox>


                                        </Checkbox.Group>

                                    </div>
                                </div>
                            </div>

                        </Form.Item>
                    </Form>

                </div>
            </div>

            <div className='ContentCapnhatVaitro-btn-group'>
                <Button
                    type="primary"
                    className="btn-cancel" >

                    Hủy bỏ

                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-continue"
                >

                    Cập nhật
                </Button>


            </div>


        </div>
    )
}

export default ContentCapnhatVaitro