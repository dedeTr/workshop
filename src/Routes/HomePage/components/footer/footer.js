import React from 'react'
import { Footer } from 'antd/lib/layout/layout'
import 'antd/dist/antd.css';



const footerSty = {
    backgroundColor: 'red',
    height: '10vh'
}

function FooterApp() {
    return (
        <Footer style={footerSty}>
            <div >

            </div>
        </Footer>
    )
}

export default FooterApp