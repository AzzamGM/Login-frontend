import React, { useState } from 'react';
import { Form, Input, Button, Card, Row, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../App.css';
import background from '../Assets/samilogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Ensure this hook handles authentication

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure the login function from your context

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        login(values.username); // Store only the username from the login
        message.success('Login successful!');
        navigate('/dashboard'); // Redirect to a protected route
      } else {
        const errorData = await response.json();
        message.error(errorData.message || 'Login failed. Please check your username and password.');
      }
    } catch (error) {
      message.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="login-card" bordered={false} style={{ paddingBottom: '0px' }}>
      <Row className="login-logocontainer">
        <div className="login-logo" style={{ backgroundImage: `url(${background})` }}></div>
      </Row>
      <Form
        name="login"
        className="login-form"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
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

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit" className="login-button" loading={loading}>
            Log In
          </Button>
          <Row>
            <h className="secondary">
              Don't have an account? <Link to="/register" style={{ fontWeight: 'bold' }}>Register</Link>
            </h>
          </Row>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
