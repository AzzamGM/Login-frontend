import React from 'react';
import { Form, Input, Button, Card, Row, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, UserAddOutlined } from '@ant-design/icons';
import '../App.css';
import background from '../Assets/samilogo.png';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { FirstName, LastName, email, username, password } = values;

    try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          fname: FirstName,
          lname: LastName,
          email,
          username,
          password
        }),
      });

      const contentType = response.headers.get('content-type');
      let data;

      if (response.ok) {
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          data = { message: await response.text() };
        }
        message.success('Registered successfully!');
        navigate('/login'); // 
      } else {
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          data = { message: await response.text() };
        }
        message.error(data.message || 'Registration failed');
      }
    } catch (error) {
      message.error('An error occurred during registration');
      console.error('Error:', error);
    }
  };

  return (
    <Card className="login-card" bordered={false} style={{ paddingBottom: '0px' }}>
      <Row className="login-logocontainer">
        <div className="login-logo" style={{ backgroundImage: `url(${background})` }}></div>
      </Row>
      <Form
        name="register"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Row style={{ display: 'flex', flexFlow: 'row' }}>
          <Form.Item
            name="FirstName"
            rules={[{ required: true, message: 'Please input your first name!' }]}
            style={{ marginRight: '15px' }}
          >
            <Input 
              prefix={<UserAddOutlined />} 
              placeholder="First Name" 
            />
          </Form.Item>

          <Form.Item
            name="LastName"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input 
              prefix={<UserAddOutlined />} 
              placeholder="Last Name" 
            />
          </Form.Item>
        </Row>  

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
        >
          <Input 
            prefix={<MailOutlined />} 
            placeholder="Email" 
          />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input 
            prefix={<UserOutlined />} 
            placeholder="Username" 
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password 
            prefix={<LockOutlined />} 
            placeholder="Password" 
          />
        </Form.Item>

        <Form.Item
          name="confirm_password"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password 
            prefix={<LockOutlined />} 
            placeholder="Confirm Password" 
          />
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit" className="login-button">
            Register
          </Button>
          <Row>
            <h className="secondary">Already have an account? <Link to="/login" style={{ fontWeight: 'bold' }}>Login</Link></h>
          </Row>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Register;
