import React from 'react'
import { Layout } from 'antd';
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import './styles.scss'


const DasboardComponent = () => {
  return (
    <Layout className='homepage'>
    <MenuSider />
    <Layout>
      {/* Header */}
      <HeaderPages title='Dasboard' path='/dasboard'/>

      {/* content */}

    
    </Layout>
  </Layout>
  )
}

export default DasboardComponent