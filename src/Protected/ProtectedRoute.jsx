import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const PrivateRoute = () => {
  const token = useSelector(state => state.auth.token); 

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/sign-in" />;
  }

  // If token exists, render the protected content
  return <Outlet />;
};

export default PrivateRoute;
