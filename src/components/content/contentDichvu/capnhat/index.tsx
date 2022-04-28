import React, { useState } from 'react'
import { Select, Button, Form, Input, Checkbox } from 'antd'
import { Link, useHistory, useParams, } from 'react-router-dom'
import './styles.scss'
import { IParams } from 'types'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { writeDataFireStore } from '../../../../firebase/AsyncActtions'
import { updateItemsDV } from 'redux/slice/DichvuSlice'


const ContentCapNhatDichvu = () => {
    const { Option } = Select
    const { TextArea } = Input

    const { id }: IParams = useParams()
    const history = useHistory()
    const { data } = useAppSelector(state => state.dichvu)
    const dispatch = useAppDispatch()

    const itemID = data?.filter((item) => {
        return `${item.key}` === id
    })

    const initValues = itemID?.[0]


    const [maDV, setMaDV] = useState(initValues.maDV)
    const [tenDV, setTenDV] = useState(initValues.tenDV)
    const [decribeDV, setDecribeDV] = useState(initValues.describe)
    const [roleCS, setRoleCapSo] = useState(initValues.roleCS)




    const onCheckedChange = (checkedValues: any) => {
        setRoleCapSo(checkedValues)
    }

    const handleCapNhatDV = () => {
        const dataUpdateDV = {
            key: initValues.key,
            maDV: maDV,
            tenDV: tenDV,
            describe: decribeDV,
            active: true,
            roleCS: roleCS,
            description: '/dichvu/chitiet',
            update: '/dichvu/capnhat',
        }
        let isEmtyDV = Object.values(dataUpdateDV).includes('')
        const checkKey = data.findIndex((item) => {
            return item.maDV == dataUpdateDV.maDV
        })
        if (isEmtyDV) {
            alert("Phải điền đầy đủ thông tin")
        } else {
            if (!isEmtyDV && checkKey === -1) {
                writeDataFireStore(dataUpdateDV, "Dichvu", initValues.key)
                dispatch(updateItemsDV(dataUpdateDV))
                history.push('/dichvu')
            }  else if (checkKey !== -1) {
                alert("Mã dịch vụ đã tồn tại!!")
            }
        }

    }
    return (
        <div className="ContentCapNhatDichvu">

            <div className="ContentCapNhatDichvu-Form">
                <h2>Thông tin thiết bị</h2>
                <div className="ContentCapNhatDichvu-Form_Input">

                    <Form
                        layout="vertical"
                        className='ContentCapNhatDichvu-Form_Input-Left'

                    >
                        <Form.Item
                            label="Mã dịch vụ:"
                            name="maDichvu"
                            initialValue={maDV}
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
                            initialValue={tenDV}
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
                        className='ContentCapNhatDichvu-Form_Input-Right'

                    >
                        <Form.Item
                            label="Mô tả:"
                            name="description"
                            initialValue={decribeDV}

                        >
                            <TextArea
                                className='textArea'
                                onChange={(e) => { setDecribeDV(e.target.value) }}

                            />
                        </Form.Item>

                    </Form>
                </div>

                <div className="ContentCapNhatDichvu-Form_roleCapso">
                    <h3>
                        Quy tắc cấp số
                    </h3>
                    <div className="ContentCapNhatDichvu-Form_roleCapso-GroupCheckBox">
                        <Checkbox.Group
                            style={{ width: '100%' }}
                            onChange={onCheckedChange}
                            defaultValue={roleCS}
                        >

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

            <div className='ContentCapNhatDichvu-btn-group'>
                <Button
                    type="primary"
                    className="btn-cancel" >
                    <Link to={'/dichvu'}>
                        Hủy
                    </Link>
                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-continue"
                    onClick={handleCapNhatDV}
                >

                    Cập nhật


                </Button>


            </div>


        </div >
    )
}

export default ContentCapNhatDichvu