import React, {useState}  from 'react'
import {  Layout ,Menu, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss'



const {Sider} = Layout
const MenuSider = () => {
    
    const history = useHistory()
    const handleClick = (e: any) => {
        history.push(e.key)

    }
  return (
    <Sider className='Menubar'>
                <div className="Menubar-Logo">
                    <Link to={'/'}>
                        <img src={require('../../assets/logo/logoHome/Logoalta.png')} />
                    </Link>
                </div>
                <div>
                    <Menu
                        onClick={handleClick}
                        mode="vertical"

                    >
                        <Menu.Item key="/dasboard" icon={<img src={require('../../assets/icon/menu/iconDasboard.png')} />}>
                            Dasboard
                        </Menu.Item>
                        <Menu.Item key="/thietbi" icon={<img src={require('../../assets/icon/menu/iconThietBi.png')} />}>
                            Thiết bị
                        </Menu.Item>
                        <Menu.Item key="/dichvu" icon={<img src={require('../../assets/icon/menu/iconDichvu.png')} />}>
                            Dịch vụ
                        </Menu.Item>
                        <Menu.Item key="/capso" icon={<img src={require('../../assets/icon/menu/iconCapso.png')} />}>
                            Cấp số
                        </Menu.Item>
                        <Menu.Item key="/baocao" icon={<img src={require('../../assets/icon/menu/iconBaoCao.png')} />}>
                            Báo Cáo
                        </Menu.Item>
                        <Menu.Item key="/caidat-hethong" icon={<img src={require('../../assets/icon/menu/iconCaiDat.png')} />}>
                            Cài đặt hệ thống
                        </Menu.Item>
                    </Menu>

                    <Button
                        type="primary"
                        icon={<img src={require('../../assets/icon/profile/fi_log-out.png')} />}
                        className=" btn_logout"
                    >
                        Đăng xuất
                    </Button>
                </div>
            </Sider>
  )
}

export default MenuSider