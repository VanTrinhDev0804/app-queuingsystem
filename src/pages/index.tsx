import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.less';
import { Layout, Menu, Breadcrumb, Avatar, Badge, Button,List } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss'

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;
const data = [
    {
      title: 'Người dùng: Nguyễn Thị Thùy Dung',
      description:'Thời gian nhận số: 12h20 ngày 30/11/2021'
    },
    {
        title: 'Người dùng: Nguyễn Thị Thùy Dung',
        description:'Thời gian nhận số: 12h20 ngày 30/11/2021'
      },
      {
        title: 'Người dùng: Nguyễn Thị Thùy Dung',
        description:'Thời gian nhận số: 12h20 ngày 30/11/2021'
      },
      {
        title: 'Người dùng: Nguyễn Thị Thùy Dung',
        description:'Thời gian nhận số: 12h20 ngày 30/11/2021'
      },
      {
        title: 'Người dùng: Nguyễn Thị Thùy Dung',
        description:'Thời gian nhận số: 12h20 ngày 30/11/2021'
      },
      {
        title: 'Người dùng: Nguyễn Thị Thùy Dung',
        description:'Thời gian nhận số: 12h20 ngày 30/11/2021'
      },

      {
        title: 'Người dùng: Nguyễn Thị Thùy Dung',
        description:'Thời gian nhận số: 12h20 ngày 30/11/2021'
      },
      {
        title: 'Người dùng: Nguyễn Thị Thùy Dung',
        description:'Thời gian nhận số: 12h20 ngày 30/11/2021'
      },
      {
        title: 'Người dùng: Nguyễn Thị Thùy Dung',
        description:'Thời gian nhận số: 12h20 ngày 30/11/2021'
      },
  ];

const Home = () => {
    const [page, setPage] = useState("")
    const history = useHistory()
    const handleClick = (e: any) => {
        history.push(e.key)

    }


    return (
        // <div className="homepage">
        <Layout className='homepage'>
            <Sider className='Menubar'>
                <div className="Menubar-Logo">
                    <Link to={'/'}>
                        <img src={require('../assets/logo/logoHome/Logoalta.png')} />
                    </Link>
                </div>
                <div>
                    <Menu
                        onClick={handleClick}
                        mode="vertical"

                    >
                        <Menu.Item key="/dasboard" icon={<img src={require('../assets/icon/menu/iconDasboard.png')} />}>
                            Dasboard
                        </Menu.Item>
                        <Menu.Item key="/thietbi" icon={<img src={require('../assets/icon/menu/iconThietBi.png')} />}>
                            Thiết bị
                        </Menu.Item>
                        <Menu.Item key="/dichvu" icon={<img src={require('../assets/icon/menu/iconDichvu.png')} />}>
                            Dịch vụ
                        </Menu.Item>
                        <Menu.Item key="/capso" icon={<img src={require('../assets/icon/menu/iconCapso.png')} />}>
                            Cấp số
                        </Menu.Item>
                        <Menu.Item key="/baocao" icon={<img src={require('../assets/icon/menu/iconBaoCao.png')} />}>
                            Báo Cáo
                        </Menu.Item>
                        <Menu.Item key="/caidat-hethong" icon={<img src={require('../assets/icon/menu/iconCaiDat.png')} />}>
                            Cài đặt hệ thống
                        </Menu.Item>
                    </Menu>

                    <Button
                        type="primary"
                        icon={<img src={require('../assets/icon/profile/fi_log-out.png')} />}
                        className=" btn_logout"
                    >
                        Đăng xuất
                    </Button>
                </div>
            </Sider>
            <Layout>
                <Header>
                    <div className="Header-title">
                        <Breadcrumb >
                            <Breadcrumb.Item>Thông tin cá nhân</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <div className="Header-acount">
                        <div className="Header-acount_notificaton">

                            <Badge count={0}>
                                <Avatar size={32} icon={<img className='no-active' src={require('../assets/icon/profile/notification.png')} />} />
                            </Badge>
                            <div className="Notification-layout">
                                <h3><p>Thông báo</p></h3>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                     
                                                title={`${item.title}`}
                                                description={`${item.description}`}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </div>

                        </div>

                        <div className="Header-acount_info">
                            <Avatar size={40} icon={<img src={require('../assets/img/profile/avatarTop.png')} />} />
                            <div>
                                <span className="Header-acount_info-textWCome">Xin chào</span>
                                <p className="Header-acount_info-name">Lê Quỳnh Ái Vân</p>
                            </div>
                        </div>


                    </div>


                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
        // </div>
    )
}

export default Home