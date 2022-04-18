import React, { useState } from 'react'
import { Select, Button, Form, Input, Checkbox } from 'antd'

import './styles.scss'


const ContentThemVaitro = () => {
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
        <div className="ContentThemVaitro">

            <div className="ContentThemVaitro-Form">
                <h2>Thông tin vai trò</h2>
                <div className="ContentThemVaitro-Form_Input">

                    <Form
                        layout="vertical"
                        className='ContentThemVaitro-Form_InputLeft'
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
                        className='ContentThemVaitro-Form_InputRight'
                    >
                        <Form.Item
                            label="Phân quyền chức năng:"
                        >
                            <div className="ContentThemVaitro-Form_InputRight-ListNhomChuNang">
                                <div className="ContentThemVaitro-Form_InputRight-ListNhomChuNang-item">
                                    <h2>Nhóm chức năng A</h2>
                                    <div className="ContentThemVaitro-Form_InputRight-GroupCheckBox">
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
                                <div className="ContentThemVaitro-Form_InputRight-ListNhomChuNang-item">
                                    <h2>Nhóm chức năng A</h2>
                                    <div className="ContentThemVaitro-Form_InputRight-GroupCheckBox">
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

                                <div className="ContentThemVaitro-Form_InputRight-ListNhomChuNang-item">
                                    <h2>Nhóm chức năng A</h2>
                                    <div className="ContentThemVaitro-Form_InputRight-GroupCheckBox">
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

            <div className='ContentThemVaitro-btn-group'>
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

                    Thêm
                </Button>


            </div>


        </div>
    )
}

export default ContentThemVaitro