import React from 'react'
import { Layout } from 'antd';
import BG from './assets/bg.jpg'
import 'antd/dist/antd.css';

import {imgStyle} from './style'

const { Content } = Layout;

function Container() {
    return (
      <Content>
        <div style={{position: "relative"}}>
          <img src={BG} className={imgStyle}/>  
          <div style={{width: 30, height:30, backgroundColor: "blue", zIndex: 2, marginTop:112, position: "absolute"}}></div>        
        </div>
      </Content>
    )
}

export default Container
