import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import Dashboard from './Pages/Dashboard';
import { Row } from 'antd';
import PrivateRoute from './Routes/PrivateRoute'; // Ensure correct path

function App() {
  return (
    <Router>
      <Row className='login-container'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute element={<Dashboard />} />
            }
          />
        </Routes>
      </Row>
    </Router>
  );
}

export default App;
