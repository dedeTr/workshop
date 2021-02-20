import React from 'react'
import 'antd/dist/antd.css';
// import "./style.css"
import AppHeader from './components/header/Header';
import { Layout } from 'antd';
import Container from './components/container';

const View = () => (
    <Layout >
        <AppHeader/>
        <Container/>
    </Layout>
    
)
export default View