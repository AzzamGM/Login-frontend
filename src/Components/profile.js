// Profile.js
import React, { useEffect, useState } from 'react';
import { Layout, Col, Typography, Spin, Alert } from 'antd';
import { useAuth } from '../Context/AuthContext';
import '../App.css';

const { Content } = Layout;
const { Title } = Typography;

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        if (user && user.username) {
          const response = await fetch(`http://localhost:8080/api/profile?username=${user.username}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if (response.ok) {
            const data = await response.json();
            setUserData(data);
          } else {
            const errorData = await response.json();
            setError(errorData.message || 'Failed to fetch profile');
          }
        } else {
          setError('User is not logged in');
        }
      } catch (err) {
        setError('An error occurred while fetching the profile');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

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
            background: '#fff',
            minHeight: 280,
            padding: 24,
            borderRadius: 8,
            height: '100%',
            width: '100%',
          }}
        >
          <Title className='paragraph-title' level={2}>User Profile</Title>
          {loading && (
            <div style={{ textAlign: 'center' }}>
              <Spin tip="Loading..." />
            </div>
          )}
          {error && <Alert message={error} type="error" showIcon />}
          {userData && (
            <div>
              <p className='paragraph-text'>First Name: <strong> {userData.firstName}</strong></p>
              <p className='paragraph-text'>Last Name: <strong> {userData.lastName}</strong></p>
              <p className='paragraph-text'>Username: <strong>{user.username}</strong></p>
              <p className='paragraph-text'>Email: <strong>{userData.email}</strong></p>
            </div>
          )}
        </div>
      </Content>
    </Col>
  );
};

export default Profile;
