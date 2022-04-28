import React, { useState } from 'react'
import { Select, Button, Form, Input } from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { db } from '../../../../firebase/cofig'
import { doc, setDoc } from 'firebase/firestore'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addItemsTBThietbi } from 'redux/slice/ThietbiSlice'
import { ItemTBThietBi } from 'types'
import './styles.scss'
import { writeDataFireStore } from '../../../../firebase/AsyncActtions'


const ContentThietbiMoi = () => {

    const {data} = useAppSelector(state => state.thietbi)
    const dispatch = useAppDispatch()
    const [maTb, SetMaTb] = useState("");
    const [tenTb, SetTenTb] = useState("");
    const [dcIP, setDcIPP] = useState("");
    const [dichvu, setDichvu] = useState({});
    const [loaiTb, SetLoaiTb] = useState("");
    const [userName, SetUserName] = useState("");
    const [password, setPassword] = useState("")

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
            <Option key={key} value={text}>
                {text}
            </Option>
        )
    })

    const onSelectDichVu = (value: object) => {
        setDichvu({...value})

    }


                                                                                                                                                                 
    const handleThemThietbi = () => {
        
    const lastKey = data ? data[data.length-1].key : 0
    const newKey = lastKey ? lastKey + 1 : lastKey

    const dataInput: ItemTBThietBi = {
        key: newKey,
        maTB: maTb,
        nameTB: tenTb,  
        loaiTb: loaiTb,
        diachiIP: dcIP,
        active: true,
        connect: true,
        dichvu:  Object.values(dichvu),
        description: '/thietbi/chitiet',
        update: '/thietbi/capnhat',
    }
        const isEmpty = Object.values(dataInput).includes('');
        const checkKey = data.findIndex((item) => {
            return item.maTB== dataInput.maTB
        })
        if (isEmpty) {
            alert("Phải điền đầy đủ thông tin")
        }else{
            if (!isEmpty && checkKey === -1) {
                writeDataFireStore(dataInput,"Thietbi",newKey )
                dispatch(addItemsTBThietbi(data?.concat(dataInput)))
                alert("Thêm thiết bị thành công!")
            }
            else if (checkKey !== -1) {
                alert("Mã thiết bị đã tồn tại!!")
            }
        }
     

    }


    return (
        <div className="ContentThietbiMoi">

            <div className="ContentThietbiMoi-Form">
                <h2>Thông tin thiết bị</h2>
                <div className="ContentThietbiMoi-Form_Input">

                    <Form
                        layout="vertical"
                        className='ContentThietbiMoi-Form_InputLeft'

                    >
                        <Form.Item
                            label="Mã thiết bị:"
                            name="maTB"
                        >

                            <Input
                                type="text"
                                name="maTB"
                                placeholder='Nhập mã thiết bị'
                                onChange={(e) => SetMaTb(e.target.value)}
                                required
                            />

                        </Form.Item>

                        <Form.Item
                            label="Tên thiết bị:"
                            name="nameTB"
                        >
                            <Input
                                type="text"
                                name="nameTB"
                                placeholder='Nhập tên thiết bị'
                                onChange={(e) => SetTenTb(e.target.value)}
                                required
                            />
                        </Form.Item>
                        <Form.Item
                            label="Địa chỉ IP:"
                            name="diachiIP"
                        >
                            <Input
                                type="text"
                                name="diachiIP"
                                placeholder='Nhập địa chỉ IP'
                                onChange={(e) => setDcIPP(e.target.value)}
                                required
                            />
                        </Form.Item>

                    </Form>

                    <Form
                        layout="vertical"
                        className='ContentThietbiMoi-Form_InputRight'

                    >
                        <Form.Item
                            label="Chọn loại thiết bị:"
                        >
                            <Select
                                style={{ width: 540 }}
                                bordered={false}
                                placeholder="Chọn loại thiết bị"
                                onChange={(e) => SetLoaiTb(e)}
                            >
                                <Option value="kiosk">Kiosk</Option>
                                <Option value="hethong">Display counter</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Tên đăng nhập:"
                            name="username"
                        >
                            <Input type="text"
                                name="username"
                                placeholder='Nhập tên đăng nhập'
                                required
                                onChange={(e) => SetUserName(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Mật khẩu"
                            name="password"



                        >
                            <Input
                                type="password"
                                name="password"
                                onChange={(e) => e.target.value}
                                required
                                placeholder='Nhập mật khẩu'
                            />
                        </Form.Item>


                    </Form>
                </div>

                <div className="ContentThietbiMoi-Form_SelectDV">
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
                                onChange={onSelectDichVu}
                            >
                                {optionSelect}
                            </Select>
                        </Form.Item>
                    </Form>
                    <p className='text-notify-role'>Là những trường thông tin bắt buộc</p>
                </div>
            </div>

            <div className='ContentThietbiMoi-btn-group'>
                <Button
                    type="primary"
                    className="btn-cancel" >
                    <Link to={'/thietbi'}>
                        Hủy
                    </Link>


                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-continue"
                    onClick={handleThemThietbi}
                >
                    Thêm thiết bị


                </Button>


            </div>


        </div>
    )
}

export default ContentThietbiMoi