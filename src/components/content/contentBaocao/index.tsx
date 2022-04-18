import React, { useState } from 'react'
import { Layout, Button, Select } from 'antd'
import TableCapSo from './tableBaocao'
import ControllCapSo from './controll'
import { Link, useParams } from 'react-router-dom'
import { IControlPage, IParams } from 'types'



import './styles.scss'
import ControllBaocao from './controll'
import TableBaocao from './tableBaocao'

const ContentBaocao: React.FC<IControlPage> = (props) => {
    const { Content } = Layout


    return (
        <Content>

            <div className="btn-Dowload">
              
                    <div className="btn-Dowload-content">
                        <img src={require('../../../assets/icon/baocao/documentload.png')} />
                        <p>Tải về</p>
                    </div>
        

            </div>



            <div className="ContentCapso">
                {/* {controller} */}
                <ControllBaocao/>

                {/* Table */}
                <TableBaocao />
            </div>











        </Content>
    )
}

export default ContentBaocao