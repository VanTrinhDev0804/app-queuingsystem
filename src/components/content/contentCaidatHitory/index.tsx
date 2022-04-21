import React, { useState } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { IControlPage } from 'types'
import TableHistory from './tableHistory'
import ControllHistory from './controll'
import './styles.scss'


const ContentCaidatHistory: React.FC<IControlPage> = (props) => {

    const { Content } = Layout
    const { controller } = props




    return (
        <Content>

            <div className="ContentCapso">
                {/* {controller} */}
                <ControllHistory />
                {/* Table */}
                <TableHistory />
            </div>

        </Content>
    )
}



export default ContentCaidatHistory