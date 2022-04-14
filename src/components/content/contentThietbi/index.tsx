import React, { useState } from 'react'
import { Layout, Button, Select } from 'antd'
import TableCapSo from './tableThietbi'
import ControllCapSo from './controll'
import { Link } from 'react-router-dom'


import './styles.scss'
import ContentCapSoMoi from './thietbimoi'



const ContentThietbi = () => {

    const [showThietbi, SetshowThietbi] = useState(false)
    const { Content } = Layout

    const showCapSoMoi = () => {
        SetshowThietbi(true)
    }
    return (
        <Content>
            {
                showThietbi ? "" : 
                <div className="btn-ThietbiNew"
                    onClick={showCapSoMoi}>
                    <div className="btn-ThietbiNew-content">
                        <img src={require('../../../assets/icon/capso/add.png')} />
                        <p>Thêm thiết bị</p>
                    </div>
                </div>
            }

            {showThietbi ? <ContentCapSoMoi /> :
                <>

                    <div className="ContentCapso">
                        {/* {controller} */}
                        <ControllCapSo />
                        {/* Table */}
                        <TableCapSo />
                    </div>
                </>


            }








        </Content>
    )
}

export default ContentThietbi