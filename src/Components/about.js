import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Row, Col } from 'antd';
import '../App.css';

const { Header, Content, Footer } = Layout;
const About = () => {
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
            <h className='paragraph-title'>STRATEGY </h>
            
            <p className='paragraph-text'>SAMI Advanced Electronics aims to build advanced national capabilities in the design and manufacturing of electronic systems, focused on constructing and developing engineering capabilities for the design of command, control, and cybersecurity systems for the defense and security sectors.</p>
        </div>
      </Content>
      </Col>
  );
};
export default About;