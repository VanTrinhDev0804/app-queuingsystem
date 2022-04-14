
import React from 'react'
import { Avatar } from 'antd';
import Notification from 'components/notification';
import { IHeaderAcount } from 'types';
import './styles.scss'


const HeaderAccount: React.FC<IHeaderAcount> = (props: IHeaderAcount) => {
    const { checkControl } = props;
    return (
        <div className="Header-acount">
            {/* notify */}

            {checkControl ?
                <>
                    <Notification />
                    <div className="Header-acount_info">
                        <Avatar size={40} icon={<img src={require('../../../assets/img/profile/avatarTop.png')} />} />
                        <div>
                            <span className="Header-acount_info-textWCome">Xin chào</span>
                            <p className="Header-acount_info-name">Lê Quỳnh Ái Vân</p>
                        </div>
                    </div>
                </>
                : ""

            }



        </div>
    )
}

HeaderAccount.defaultProps= {
    checkControl: true
}

export default HeaderAccount