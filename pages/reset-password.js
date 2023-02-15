import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = router.query.token;
    if (!password || !confirmPassword || password.trim() === '' || confirmPassword.trim() === '') {
        setMessage('Password and confirm password are required');
        return;
  }
    try {
        console.log(password, confirmPassword)
      const response = await axios.post('/api/auth/reset-password', {
        password,
        confirmPassword,
        token,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Reset Your Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}