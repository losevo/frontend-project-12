import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }
  return {};
};

const MainPage = () => {
  const navigate = useNavigate();
  const header = getAuthHeader();

  useEffect(() => {
    if (Object.keys(header).length === 0) {
      navigate('/login');
    }
  });

  return (<div> My mom and I </div>);
};

export default MainPage;
