import React from 'react'
import { Select } from 'antd';
import './styles.scss'
import { useHistory } from 'react-router-dom';


const DasboardSelect = () => {
    const { Option } = Select
    const history = useHistory()
    const handleChange = (value: string) => {
        const path = `/dasboard/${value}`
        history.push(path)
    }   
  return (
    <div className="Dasboard-chartArea-controll">
    <h3>Xem theo</h3>
    <Select defaultValue="day"
        bordered={false}
        onChange={handleChange}
        placement ='bottomLeft'
        suffixIcon={<img src={require('../../../../assets/icon/dasboard/dropdown.png')}/>}
        dropdownClassName ='listItem-select'
        dropdownStyle={
            {
                backgroundColor: '#ffff',
                boxShadow: '0px 0px 6px #E7E9F2',
                borderRadius: 8,
                color: '#535261'

            }
        }
    >
        <Option value="day">Ngày</Option>
        <Option value="week">Tuần</Option>
        <Option value="month">Tháng </Option>
    </Select>
</div>
  )
}

export default DasboardSelect