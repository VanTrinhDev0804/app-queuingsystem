import React from 'react'
import { Layout, Breadcrumb, Avatar } from 'antd';
import Notification from '../notification';
import './styles.scss'
import {  IHeader } from 'types';
import { Link } from 'react-router-dom';
import HeaderAccount from './account';

const { Header } = Layout;




const HeaderPages: React.FC<IHeader> = (props: IHeader) => {
    const { title, checkControl, path } = props;


    return (
        <Header>
            <div className="Header-title">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={`${path}`}>
                            {title}
                        </Link>
                    </Breadcrumb.Item>
                    
                </Breadcrumb>
            </div>
            <HeaderAccount checkControl={checkControl}/>
        </Header>
    )
}
HeaderPages.defaultProps = {
    path: '/',
    title: "Thông tin cá nhân",
    checkControl: true
}
export default HeaderPages