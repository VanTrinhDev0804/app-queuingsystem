import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import ContentThietbi from 'components/content/contentThietbi';




const ThietbiComponent = () => {
  return (
    <Layout >
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages title='Thiết bị'/>

        {/* content */}
        
       <ContentThietbi/>
      </Layout>
    </Layout>
  )
}

export default ThietbiComponent