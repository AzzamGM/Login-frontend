import React from 'react';
import { Layout, theme, Col } from 'antd';
import { useAuth } from '../Context/AuthContext'; 
import '../App.css';

const { Content } = Layout; 

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { user } = useAuth(); 

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
          <h className='paragraph-title'>Welcome to Sami Advance Technologies</h>
          <p className='paragraph-text'>
            At Sami Advance Technologies, we are at the forefront of innovation, delivering cutting-edge solutions designed to propel your business into the future. Our team of expert engineers and developers specialize in creating advanced technological solutions that drive efficiency, enhance productivity, and unlock new opportunities. From sophisticated software development and AI-powered analytics to state-of-the-art cybersecurity and cloud solutions, we harness the latest advancements to tailor solutions that meet your unique needs. Our commitment to excellence and our passion for technology drive us to continually push boundaries and deliver unparalleled value. Partner with Sami Advance Technologies to experience the transformative power of innovation and secure your position as a leader in the digital age.
          </p>
        </div>
      </Content>
    </Col>
  );
};

export default Home;
