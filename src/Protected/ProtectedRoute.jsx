import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend-e-commerce-three.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const ProtectedRoute = () => {
  const navigate = useNavigate();
  let [isvaild, setIsvaild] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/auth/user');
        if (response.status === 200) {
          setIsvaild(true);
        }
      } catch (error) {
        console.log('error hoise :' + error);
        localStorage.removeItem('userId');
        navigate('/sign-in');
      }
    };
    checkAuth();
  }, [navigate]);

  return isvaild ? <Outlet /> : <div>Wait....</div>;
};

export default ProtectedRoute;
