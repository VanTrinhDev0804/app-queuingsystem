import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';



const CaidatComponent = () => {
  return (
    <Layout >
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages title='Cài đặt'/>

        {/* content */}

      </Layout>
    </Layout>
  )
}

export default CaidatComponent