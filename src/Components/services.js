import React from 'react';
import { Layout, theme, Col } from 'antd';
import '../App.css';

const { Content } = Layout;

const Services = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Col className='dashboard-bg'>
      <Content
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            height: '100%',
            width: '100%',
          }}
        >
          <h1 className='paragraph-title'>Our Services</h1>
          <p className='paragraph-text'>
            We offer a range of services to meet your needs. From consulting to implementation, our team is here to help you achieve your goals.
          </p>
        </div>
      </Content>
    </Col>
  );
};

export default Services;
