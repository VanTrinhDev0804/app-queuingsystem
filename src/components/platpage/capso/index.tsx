import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';



const CapsoComponent = () => {
  return (
    <Layout >
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages title='Cấp số'/>

        {/* content */}

       
      </Layout>
    </Layout>
  )
}

export default CapsoComponent