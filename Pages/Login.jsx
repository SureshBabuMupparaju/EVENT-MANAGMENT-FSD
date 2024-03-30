

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Login from '../Components/Auth/Login';

function LoginPage() {
  const history = useHistory();
  const [error, setError] = useState('');

  const handleLogin = async (userData) => {
    try {
      const response = await axios.post('/api/auth/login', userData);
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Login onLogin={handleLogin} />
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
