import React, { useState } from 'react'
import { Layout, Button, Select } from 'antd'
import TableCapSo from './tableCapso'
import ControllCapSo from './controll'
import { Link } from 'react-router-dom'


import './styles.scss'
import ContentCapSoMoi from './capsomoi'



const ContentCapso = () => {

    const [showCSM, SetshowCMS] = useState(false)
    const { Content } = Layout

    const showCapSoMoi = () => {
        SetshowCMS(true)
    }
    return (
        <Content>
            {
                showCSM ? "" : 
                <div className="btn-CapsoNew"
                    onClick={showCapSoMoi}>
                    <div className="btn-CapsoNew-content">
                        <img src={require('../../../assets/icon/capso/add.png')} />
                        <p>Cấp số mới</p>
                    </div>
                </div>
            }

            {showCSM ? <ContentCapSoMoi /> :
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

export default ContentCapso