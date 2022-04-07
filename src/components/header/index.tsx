import React from 'react'
import { Layout, Breadcrumb, Avatar } from 'antd';
import Notification from '../notification';
import './styles.scss'
import { IbreadCrumbName, IHeader } from 'types';
import { Link } from 'react-router-dom';

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

            <div className="Header-acount">
                {/* notify */}

                {checkControl ?
                    <>
                        <Notification />
                        <div className="Header-acount_info">
                            <Avatar size={40} icon={<img src={require('../../assets/img/profile/avatarTop.png')} />} />
                            <div>
                                <span className="Header-acount_info-textWCome">Xin chào</span>
                                <p className="Header-acount_info-name">Lê Quỳnh Ái Vân</p>
                            </div>
                        </div>
                    </>
                    : ""

                }



            </div>


        </Header>
    )
}
HeaderPages.defaultProps = {
    path: '/',
    title: "Thông tin cá nhân",
    checkControl: true
}
export default HeaderPages