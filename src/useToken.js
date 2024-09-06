import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    return tokenString; 
  };


  const [token, setToken] = useState(getToken());


  const saveToken = (token) => {
    sessionStorage.setItem('token', token);
    setToken(token);
  };

  return [token, saveToken];
}