import React, { useState } from 'react'
import { Avatar, Badge, List } from 'antd';
import NotifyList from './notifylist';
import './styles.scss'




const Notification = () => {


    const [notify, setNotify] = useState(false);
    const showNotify = () => {
        setNotify(!notify)

    }
    return (
        <div className="Header-acount_notificaton">
            <a
                onClick={showNotify}
            >
                <Badge
                    count={0}>
                    {notify ?

                        <Avatar
                            size={32}
                            icon={<img
                                className='no-active'
                                src={require('../../assets/icon/profile/notification-w.png')} />

                            } /> :
                        <Avatar
                            size={32}
                            icon={<img
                                className='no-active'
                                src={require('../../assets/icon/profile/notification.png')} />

                            } />

                    }

                </Badge>
            </a>

            {/* show */}
            {notify ? <NotifyList /> : ""}

        </div>
    )
}


export default Notification