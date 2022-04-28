import React, { useState } from 'react'
import { Select, Button, Form, Input, Checkbox } from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './styles.scss'
import { writeDataFireStore } from '../../../../firebase/AsyncActtions'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addItemsTBDichvu } from 'redux/slice/DichvuSlice'
import { idText } from 'typescript'



const ContentThemDichvu = () => {
    const { TextArea } = Input

    const { data } = useAppSelector(state => state.dichvu)
    const dispacth = useAppDispatch()

    const [maDV, setMaDV] = useState("")
    const [tenDV, setTenDV] = useState("")
    const [decribeDV, setDecribeDV] = useState("")
    const [roleCS, setRoleCapSo] = useState([])



    const onCheckedChange = (checkedValues: any) => {
        setRoleCapSo(checkedValues)
    }

    const handleThemDV = () => {
        const lastKey = data ? data[data.length - 1].key : 0
        const newKey = lastKey ? lastKey + 1 : lastKey
        const dataDichvu = {
            key: newKey,
            maDV: maDV,
            tenDV: tenDV,
            describe: decribeDV,
            active: true,
            roleCS: roleCS,
            description: '/dichvu/chitiet',
            update: '/dichvu/capnhat',
        }
        let isEmtyDV = Object.values(dataDichvu).includes('')
        const checkKey = data.findIndex((item) => {
            return item.maDV == dataDichvu.maDV
        })

        if (isEmtyDV) {
            alert("Phải điền đầy đủ thông tin")
        }
        else {
            if (!isEmtyDV && checkKey === -1) {
                writeDataFireStore(dataDichvu, "Dichvu", newKey)
                dispacth(addItemsTBDichvu(data?.concat(dataDichvu)))
            }
            else if (checkKey !== -1) {
                alert("Mã dịch vụ đã tồn tại!!")
            }
        }



    }
    return (
        <div className="ContentThemDichvu">

            <div className="ContentThemDichvu-Form">
                <h2>Thông tin dịch vụ</h2>
                <div className="ContentThemDichvu-Form_Input">

                    <Form
                        layout="vertical"
                        className='ContentThemDichvu-Form_InputLeft'
                    >
                        <Form.Item
                            label="Mã dịch vụ:"
                            name="maDichvu"
                        >

                            <Input
                                type="text"
                                name="maDichvu"
                                placeholder='Nhập mã dịch vụ'
                                onChange={(e) => { setMaDV(e.target.value) }}
                            />

                        </Form.Item>

                        <Form.Item
                            label="Tên dịch vụ:"
                            name="tenDichvu"
                        >
                            <Input
                                type="text"
                                name="tenDichvu"
                                placeholder='Nhập tên dịch vụ'
                                onChange={(e) => { setTenDV(e.target.value) }}
                            />
                        </Form.Item>

                    </Form>

                    <Form
                        layout="vertical"
                        className='ContentThemDichvu-Form_InputRight'
                    >

                        <Form.Item
                            label="Mô tả:"
                            name="description"
                        >
                            <TextArea
                                className='textArea'
                                placeholder="Mô tả dịch vụ"
                                onChange={(e) => { setDecribeDV(e.target.value) }}
                            />
                        </Form.Item>

                    </Form>
                </div>

                <div className="ContentThemDichvu-Form_roleCapso">
                    <h3>
                        Quy tắc cấp số
                    </h3>
                    <div className="ContentThemDichvu-Form_roleCapso-GroupCheckBox">
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

            <div className='ContentThemDichvu-btn-group'>
                <Button
                    type="primary"
                    className="btn-cancel" >
                    <Link to={"/dichvu"}>
                        Hủy bỏ
                    </Link>
                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-continue"
                    onClick={handleThemDV}
                >

                    Thêm dịch vụ
                </Button>


            </div>


        </div>
    )
}

export default ContentThemDichvu