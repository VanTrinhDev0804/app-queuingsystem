
import React from 'react'
import { Avatar } from 'antd';
import Notification from 'components/notification';
import { IHeaderAcount, IProfile } from 'types';
import './styles.scss'
import { useAppSelector } from 'redux/hooks';


const HeaderAccount: React.FC<IHeaderAcount> = (props: IHeaderAcount) => {
    const { checkControl } = props;
    const {currentUser} = useAppSelector(state =>state.auth)
    const localUser :IProfile[] =JSON.parse(window.localStorage.getItem('author') ||"")

    const currentValue =  !localUser ? currentUser?.[0] : localUser[0]
    return (
        <div className="Header-acount">
            {/* notify */}

            {checkControl ?
                <>
                    <Notification />
                    <div className="Header-acount_info">
                        <Avatar size={40} icon={<img src={currentValue?.avatar} />} />
                        <div>
                            <span className="Header-acount_info-textWCome">Xin chào</span>
                            <p className="Header-acount_info-name">{currentValue?.name}</p>
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