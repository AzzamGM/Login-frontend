import React from 'react';
import { Layout, Form, Input, Button, theme, Row, Typography, Col } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';
import '../App.css'; 

const { Content } = Layout;
const { Title } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Col className='dashboard-bg' style={{ minHeight: '100vh' }}>
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: borderRadiusLG,
          padding: '50px 20px',
          background: colorBgContainer,
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <Title level={3} style={{ textAlign: 'center', marginBottom: '24px' }}>Contact Us</Title>
          <Form
            name="contact"
            onFinish={onFinish}
            layout="vertical"
            style={{
              width: '100%',
            }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Your Name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input.TextArea prefix={<MessageOutlined />} rows={4} placeholder="Your Message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Col>
  );
};

export default Contact;
