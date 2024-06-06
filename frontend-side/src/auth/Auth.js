import React from 'react';
import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

export const logout = () => {
  // Clear the token from localStorage
  localStorage.removeItem('token');
  // Redirect to login page
  window.location.href = '/login';
};

export default Auth;
