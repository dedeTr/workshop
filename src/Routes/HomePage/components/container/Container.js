import React, { useState } from 'react'
import { Layout, Modal, Button, Form, Input, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { containerStyle, loginsty, formsty } from './style';

const { Content } = Layout

function Container() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
    
    return (
      <Content className={containerStyle}>
        <Button type="primary" onClick={showModal} style={{marginTop:'30vh'}}>
        Open Modal with async logic
      </Button>
          <Modal
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[
            <div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'-5vh'}}>
              <Button key="submit" type="primary" loading={confirmLoading} onClick={handleOk} style={{width: '300px'}}>
                Log in
              </Button>
            </div>,
            <div style={{width:'100%',height:'1px', backgroundColor:'	#D3D3D3', marginTop:'5vh'}}/>,
            <div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'3vh'}}>
              Tidak punya akun?
              <a href="" >register now!</a>
            </div>
          ]}
        >
          <div className={loginsty}>
            <h2 style={{textAlign: 'center'}}>Login</h2>
            <Form
              name="normal_login"
              className={formsty}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a style={{float: 'right'}} href="">
                  Forgot password
                </a>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </Content>
    )
}

export default Container
