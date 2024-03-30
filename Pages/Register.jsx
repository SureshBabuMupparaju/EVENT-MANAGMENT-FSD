

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Register from '../Components/Auth/Register';

function RegisterPage() {
  const history = useHistory();
  const [error, setError] = useState('');

  const handleRegister = async (userData) => {
    try {
      const response = await axios.post('/api/auth/register', userData);
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <Register onRegister={handleRegister} />
      {error && <p>{error}</p>}
    </div>
  );
}

export default RegisterPage;
