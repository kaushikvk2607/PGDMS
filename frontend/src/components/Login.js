import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
const Login = ({ handleLogin }) => {
  const [credentials, setCredentials] = useState({ user_id: '', password: '' });
   const navigate = useNavigate();
   const handleLoginClick = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/login/', credentials);

      if (response.data.access_token) {
        // Token received upon successful login
        const accessToken = response.data.access_token;

        // Store the access token in localStorage
        localStorage.setItem('accessToken', accessToken);

        // Set the Axios Authorization header for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        // Call the handleLogin function to set the loggedIn state to true
        handleLogin();

        // Navigate to the dashboard
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="p-8 rounded-lg shadow-md max-w-md w-full bg-zinc-100">
        <h2 className="text-3xl font-bold mb-4 text-center text-pink-700">Login Page</h2>
        <form>
          <div className="mb-4">
            <label className="block text-pink-700">User ID:</label>
            <input
              type="text"
              placeholder="User ID"
              value={credentials.user_id}
              onChange={(e) =>
                setCredentials({ ...credentials, user_id: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-pink-700">Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <Link className="p-2 text-sm text-zinc-600 underline hover:text-red-500" to={'/registrationuni'}>Register as a University(Department Head)?</Link>
          
          <button
            type="button"
            onClick={handleLoginClick}
            className="w-full bg-pink-700 text-white hover:bg-pink-600 py-2 rounded-md focus:outline-none"
          >
            Login
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
