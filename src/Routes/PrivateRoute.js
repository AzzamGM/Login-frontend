import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Adjust the path as needed

const PrivateRoute = ({ element }) => {
  const { user } = useAuth(); // Assuming 'user' will be non-null if authenticated

  if (!user) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  return element; // Render the passed element if authenticated
};

export default PrivateRoute;
