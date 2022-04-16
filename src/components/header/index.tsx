import React from 'react'
import { Layout, Breadcrumb, Avatar } from 'antd';
import Notification from '../notification';
import './styles.scss'
import { IBread, IHeader, IParams } from 'types';
import { Link, useParams } from 'react-router-dom';
import HeaderAccount from './account';

const { Header } = Layout;




const HeaderPages: React.FC<IHeader> = (props: IHeader) => {
    const { listTitle, checkControl } = props;
    const { page, control }: IParams = useParams();
    
    const name = control ? `/${page}/${control}` : `${page}`

    const list = listTitle?.filter((items) => {
        return (items.path === `/${page}`)
    })
    
    const PathParams = listTitle?.filter((items) => {
        return items.path === `${name}`
    })

    const ItemBreaddf = (list?.length !==0 ? 
    
    list?.map((items, index) => {
        return (
            <Breadcrumb.Item key={index}>
                <Link to={`${items.path}`}>
                    {items.titleBread}
                </Link>
            </Breadcrumb.Item>
        )
    })
    :
    listTitle?.map((items, index) => {
        return (
            <Breadcrumb.Item key={index}>
                <Link to={`${items.path}`}>
                    {items.titleBread}
                </Link>
            </Breadcrumb.Item>
        )
    })

    )
    const ItemBreadPath = PathParams?.map((items, index) => {
        return (
            <Breadcrumb.Item key={index}>
                <Link to={`${items.path}`}>
                    {items.titleBread}
                </Link>
            </Breadcrumb.Item>
        )
    })



    return (
        <Header>
            <div className="Header-title">
                <Breadcrumb
                    separator={<img src={require('../../assets/icon/breaddf.png')} />}
                >
                    {ItemBreaddf}
                    {ItemBreadPath}


                </Breadcrumb>
            </div>
            <HeaderAccount checkControl={checkControl} />
        </Header>
    )
}
HeaderPages.defaultProps = {
    listTitle: [{
        titleBread: "Thông tin cá nhân",
        path: "/"
    }],

    checkControl: true
}
export default HeaderPages