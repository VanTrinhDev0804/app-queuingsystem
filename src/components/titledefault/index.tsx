import React from 'react'
import { Layout } from 'antd'
import './styles.scss'
import { IDefaultTitle } from 'types'
const TitleDefault : React.FC<IDefaultTitle> = (props) => {
    const {Header} = Layout

    return (
        <Header >
            <h3 className='Default'>
                {props.text}
            </h3>
        </Header>
    )
}

export default TitleDefault