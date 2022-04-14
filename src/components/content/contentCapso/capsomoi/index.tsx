import React, { useState } from 'react'
import { Select , Button, Modal} from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './styles.scss'

const ContentCapSoMoi = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { Option } = Select
    const history = useHistory()
    const handelCancel = ()=>{
       setIsModalVisible(false)
    }

    const handelInso=()=>{
        setIsModalVisible(true)
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
            dropdownClassName ='dropmenu'
        // onChange={handleSelectDichvu}
        >
            <Option value="san-phu-khoa">Khám sản - Phụ khoa</Option>
            <Option value="rang-ham-mat">Khám răng hàm mặt</Option>
            <Option value="tai-mui-hong">Khám tai mũi họng</Option>
        </Select>
    </div>
    <div className='ContentCapSoMoi-btn-group'>
        <Button type="primary" className="btn-cancel" >
          
                Hủy
        
        </Button>
        <Button type="primary" htmlType="submit" className="btn-continue"  onClick={handelInso}>
            In Số
        </Button>

        
    </div>

    <Modal 
    title="" 
    visible={isModalVisible}
     onCancel={handelCancel}
     footer ={null}
     >
        <div className="modelInSo-infor">
            <h3>Số thứ tự được cấp</h3>
            <h2>
            2001201
            </h2>
            <p>DV: Khám răng hàm mặt <span>(tại quầy số 1)</span> </p>
        </div>
        <div className="modelInSo-time">
            <div className="modelInSo-day">
                <p>Thời gian cấp: </p>
                <p className='day'>09:30 11/10/2021 </p>
            </div>
            <div className="modelInSo-date">
                <p>Hạn sử dụng: </p>
                <p className='date'>17:30 11/10/2021 </p>
            </div>
        </div>
      </Modal>
</div>
  )
}

export default ContentCapSoMoi