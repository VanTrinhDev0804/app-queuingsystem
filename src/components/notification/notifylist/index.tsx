import React from 'react'
import { List } from 'antd';
import './styles.scss'

const dataNotify = [
    {
        title: "Người dùng: Nguyễn Thị Thùy Dung",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },
    {
        title: "Người dùng: Nguyễn Thiên Chinh",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },
    {
        title: "Người dùng: Võ Thị Kim Liên",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },
    {
        title: "Người dùng: Hoàng Nguyễn Quốc Huy",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },
    {
        title: "Người dùng: Võ Ngọc Lan Anh",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },
    {
        title: "Người dùng: Nguyễn Thị Thùy Dung",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },
    {
        title: "Người dùng: Nguyễn Thị Thùy Dung",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },

    {
        title: "Người dùng: Nguyễn Thị Thùy Dung",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },
    {
        title: "Người dùng: Nguyễn Thị Thùy Dung",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },
    {
        title: "Người dùng: Nguyễn Thị Thùy Dung",
        description: "Thời gian nhận số: 12h20 ngày 30/11/2021"
    },

]

const NotifyList = () => {
    return (
        <div className="Notification-layout">
            <h3>Thông báo</h3>

            <div className='Notification-layout-list'>
                <List
                    className='List'
                    itemLayout="horizontal"
                    dataSource={dataNotify}
                    renderItem={items => (
                        <List.Item>
                            <List.Item.Meta
                                title={`${items.title}`}
                                description={`${items.description}`}
                            />
                        </List.Item>
                    )}
                />
            </div>

        </div>
    )
}

export default NotifyList