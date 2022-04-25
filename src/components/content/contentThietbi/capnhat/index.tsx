import React, { useState } from 'react'
import { Select, Button, Form, Input } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { IParams, ItemTBThietBi } from 'types'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../../firebase/cofig'
import { updateItems } from 'redux/slice/ThietbiSlice'
import './styles.scss'



const ContentCapNhatThietbi = () => {
    const { Option } = Select

    const { id }: IParams = useParams();
    const { data } = useAppSelector(state => state.thietbi)
    const dispatch = useAppDispatch()
  
    const itemID = data?.filter((item) => {
        return `${item.key}` === id
    })
    const initValues = itemID?.[0]

    console.log(initValues)
    const [maTb, SetMaTb] = useState(initValues.maTB);  
    const [tenTb, SetTenTb] = useState(initValues.nameTB);
    const [dcIP, setDcIPP] = useState(initValues.diachiIP);
    const [dichvu, setDichvu] = useState(initValues.dichvu);
    const [loaiTb, SetLoaiTb] = useState(initValues.loaiTb);
    const [userName, SetUserName] = useState("");
    const [password, setPassword] = useState("");

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
            <Option key={text}>
                {text}
            </Option>
        )
    })

    const dataUpdate: ItemTBThietBi = {
        key: initValues?.key,
        maTB: maTb,
        nameTB: tenTb,
        loaiTb: loaiTb,
        diachiIP: dcIP,
        active: true,
        connect: true,
        dichvu: dichvu,
        description: '/thietbi/chitiet',
        update: '/thietbi/capnhat',
    }

    const writeDataCapso = async (data : any, index : any) => {
        await setDoc(doc(db, "Thietbi", `${index}`), data);
    }
    const UpdateItemThietBi = () => {
        const isEmpty = Object.values(dataUpdate).includes('');
        console.log(isEmpty)
        if (!isEmpty) {
            writeDataCapso(dataUpdate, initValues?.key)
            dispatch(updateItems(dataUpdate))
            alert("Cập nhật thiết bị thành công")
        }
        else {
            alert("Phải nhập đầy đủ thông tin")
        }
    }


   


    return (
        <div className="ContentCaNhatThietbi">

            <div className="ContentCapNhatThietbi-Form">
                <h2>Thông tin thiết bị</h2>
                <div className="ContentCapNhatThietbi-Form_Input">

                    <Form
                        layout="vertical"
                        className='ContentCapNhatThietbi-Form_InputLeft'

                    >
                        <Form.Item
                            label="Mã thiết bị:"
                            name="maTB"
                            initialValue={maTb}
                        >

                            <Input
                                type="text"
                                name="maTB"
                                placeholder='Nhập mã thiết bị'
                             
                                onChange={(e) => SetMaTb(e.target.value)}
                            />

                        </Form.Item>

                        <Form.Item
                            label="Tên thiết bị:"
                            name="nameTB"
                            initialValue={tenTb}
                        >
                            <Input
                                type="text"
                                name="nameTB"
                                placeholder='Nhập tên thiết bị'
                                onChange={(e) => SetTenTb(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Địa chỉ IP:"
                            name="diachiIP"
                            initialValue={dcIP}
                        >
                            <Input
                                type="text"
                                name="diachiIP"
                                placeholder='Nhập địa chỉ IP'
                                onChange={(e) => setDcIPP(e.target.value)}
                            />
                        </Form.Item>

                    </Form>

                    <Form
                        layout="vertical"
                        className='ContentCapNhatThietbi-Form_InputRight'
                    >
                        <Form.Item
                            label="Chọn loại thiết bị:"
                        >
                            <Select
                                style={{ width: 540 }}
                                bordered={false}
                                placeholder="Chọn loại thiết bị"
                                defaultValue={loaiTb}
                                onChange={(e) => SetLoaiTb(e)}
                            >
                                <Option value="kiosk">Kiosk</Option>
                                <Option value="hethong">Display counter</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Tên đăng nhập:"
                            name="username"
                            initialValue={"Lequynhaivan01"}
                        >
                            <Input type="text"
                                name="username"
                                placeholder='Nhập tên đăng nhập'
                                onChange={(e) => SetUserName(e.target.value)}
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
                                onChange={(e) => e.target.value}
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
                                defaultValue={dichvu}
                                onChange={(e)=>setDichvu(dichvu?.concat(e))}
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
                    <Link to={'/thietbi'}>
                        Hủy
                    </Link>

                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-continue"
                    onClick={UpdateItemThietBi}
                >

                    Cập nhật

                </Button>


            </div>


        </div>
    )
}

export default ContentCapNhatThietbi