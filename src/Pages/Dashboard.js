import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, QuestionOutlined, PhoneOutlined, BankOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Home from '../Components/home';
import About from '../Components/about';
import Contact from '../Components/contact';
import Services from '../Components/services';
import Profile from '../Components/profile';
import { useAuth } from '../Context/AuthContext';
import '../App.css';

const { Header } = Layout;

const items = [
  { key: 'home', label: 'Home', icon: <HomeOutlined /> },
  { key: 'about', label: 'About Us', icon: <QuestionOutlined /> },
  { key: 'contact', label: 'Contact', icon: <PhoneOutlined /> },
  { key: 'services', label: 'Services', icon: <BankOutlined /> },
];

const Dashboard = () => {
  const [selectedKey, setSelectedKey] = useState('home');
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderContent = () => {
    switch (selectedKey) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
        className='dashboard-bar'
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          style={{
            flex: 1,
            minWidth: 0,
            display: 'block',
            width: '100%',
            marginLeft: '36px',
          }}
          className='dashboard-bar'
        >
          {items.map(({ key, label, icon }) => (
            <Menu.Item className='menu-button' style={{ width: 'auto', textAlign: 'center', fontSize: '18px' }} key={key}>
              {icon} {label}
            </Menu.Item>
          ))}
          <Menu.Item
            className='logout-button'
            style={{
              backgroundColor: 'red',
              color: 'white',
              float: 'right',
              width: '100px',
              textAlign: 'center',
              fontSize: '18px'
            }}
            onClick={handleLogout}
          >
            Logout
          </Menu.Item>
          <Menu.Item
            style={{
              color: 'white',
              float: 'right',
              width: '100px',
              textAlign: 'center',
              fontSize: '18px'
            }}
            key="profile" 
            onClick={() => setSelectedKey('profile')}
          >
            <UserOutlined /> Profile
          </Menu.Item>
        </Menu>
      </Header>
      {renderContent()}
    </Layout>
  );
};

export default Dashboard;
