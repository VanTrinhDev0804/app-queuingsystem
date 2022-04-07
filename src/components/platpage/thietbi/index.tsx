import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';




const ThietbiComponent = () => {
  return (
    <Layout >
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages title='Thiết bị'/>

        {/* content */}

       
      </Layout>
    </Layout>
  )
}

export default ThietbiComponent