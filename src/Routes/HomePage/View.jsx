import React from 'react'
import 'antd/dist/antd.css';
// import "./style.css"
import AppHeader from './components/header/Header';
import { Layout } from 'antd';
import Container from './components/container';
import FooterApp from './components/footer';

const View = () => (
    <Layout style={{height: '100%', display: 'flex'}}>
        <AppHeader/>
        <Container/>
        <FooterApp/>
    </Layout>
    
)
export default View