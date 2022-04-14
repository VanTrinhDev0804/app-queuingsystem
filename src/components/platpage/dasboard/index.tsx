import React from 'react'
import { Layout } from 'antd';
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import SiderRinght from '../../siderRight';
import './styles.scss'
import DasboardContent from 'components/content/contentdasboard';




const DasboardComponent = () => {
    const { Header} = Layout;
    return (
        <Layout className='Dasboard'>
            <MenuSider />
            <Layout>
                {/* Header */}
                <HeaderPages title='Dasboard' path='/dasboard' checkControl={false} />

                {/* content */}
                <Header >
                    <h3 className='Dasboard-name'>
                        Biểu đồ cấp số
                    </h3>
                </Header>
                <DasboardContent/>

            </Layout>
            <SiderRinght />
        </Layout>
    )
}

export default DasboardComponent