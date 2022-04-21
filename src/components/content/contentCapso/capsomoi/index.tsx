import React, { useState } from 'react'
import { Select, Button, Modal, Alert } from 'antd'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../../firebase/cofig'
import './styles.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addItemsTBCapso, CapsoState } from 'redux/slice/CapsoSlice'

const ContentCapSoMoi = () => {

    const { data } = useAppSelector(state => state.capso)
    const { Option } = Select
    const dispatch = useAppDispatch()
    const newLocal = data?.length !=0 ? data?.[data.length-1].stt : 20100000
    const lenghtData = data?.length

    const stt = newLocal ? newLocal+1 : 1
    const index = lenghtData ? lenghtData +1 : 0
    // state
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dichvu,setDichvu] = useState("")
    const [sttNew, setSttnew] = useState(stt)
    const [indexFireStore , setIndex] = useState(index)



    
   

    var curDate = new Date();
    var minutes = curDate.getMinutes() < 10 ?`0${curDate.getMinutes()}`: curDate.getMinutes()
    var hours = curDate.getHours() < 10 ?`0${curDate.getHours()}`: curDate.getHours()
    const day = `${curDate.getDate()}/${curDate.getMonth()+1}/${curDate.getFullYear()}`
    const time =`${hours}:${minutes}`

    const userName ="Lê Quỳnh Ái Vân"  
    const datanew={
        stt: sttNew,
        key : sttNew,
        name: userName,
        dichvu: dichvu,
        day : `${time}-${day}`,
        date: `17:30 - ${day}`,
        status: 1,
        source : "Kiosk",
        action: "/capso/chitiet"
    }


    const writeDataCapso =async () => {
        await setDoc(doc(db, "Capso", `${indexFireStore}`), datanew);
    }
    
    const handelCancel = () => {
        setIsModalVisible(false)
        setSttnew(datanew.stt+1)
        setIndex(indexFireStore + 1)
        const newdata = data?.concat(datanew)
        dispatch(addItemsTBCapso(newdata))
    }


    const handleSelectDichvu =(value: any) =>{
        setDichvu(value)
    }

    const handelInso = () => {
        if(dichvu!==""){
            setIsModalVisible(true)

            writeDataCapso();
           
        }
        else{
            alert('Chọn dịch vụ!!')
        }
    }
    return (
        <div className="ContentCapSoMoi">
            <h2>CẤP SỐ MỚI</h2>
            <div className="ContentCapSoMoi-Selection">
                <h3>Dịch vụ khách hàng lựa chọn</h3>
                <Select
                    placeholder=" Chọn dịch vụ"
                    style={{ width: 400 }}
                    bordered={false}
                    dropdownClassName='dropmenu'
                onChange={handleSelectDichvu}
                >
                    <Option value="Khám sản - Phụ khoa">Khám sản - Phụ khoa</Option>
                    <Option value="Khám răng hàm mặt">Khám răng hàm mặt</Option>
                    <Option value="Khám tai mũi họng">Khám tai mũi họng</Option>
                </Select>
            </div>
            <div className='ContentCapSoMoi-btn-group'>
                <Button type="primary" className="btn-cancel" >
                    <Link to={'/capso'}>
                    Hủy
                    </Link>
               

                </Button>
                <Button type="primary" htmlType="submit" className="btn-continue" onClick={handelInso}>
                    In Số
                </Button>


            </div>

            <Modal
                title=""
                visible={isModalVisible}
                onCancel={handelCancel}
                footer={null}
            >
                <div className="modelInSo-infor">
                    <h3>Số thứ tự được cấp</h3>
                    <h2>
                        {sttNew !==0 ?sttNew : "Error"}
                    </h2>
                    <p>DV: {dichvu} <span>(tại quầy số 1)</span> </p>
                </div>
                <div className="modelInSo-time">
                    <div className="modelInSo-day">
                        <p>Thời gian cấp: </p>
                        <p className='day'>{time} {day} </p>
                    </div>
                    <div className="modelInSo-date">
                        <p>Hạn sử dụng: </p>
                        <p className='date'>17:30 {day} </p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ContentCapSoMoi