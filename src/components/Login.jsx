import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <div className='flex flex-row justify-center items-center h-screen'>
      <div className='bg-slate-800 px-3 py-3 justify-center items-center w-1/2 h-1/2 rounded-md'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-y-3'>
            <label htmlFor='login' className='text-white text-2xl font-bold mb-4'>Login</label>
            <input
              type='text'
              key='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='px-3 py-2 w-full border border-gray-400 rounded-md'
              placeholder='Username'
              required
            />
            <input
              type='password'
              key='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='px-3 py-2 w-full border border-gray-400 rounded-md'
              placeholder='Password'
              minLength={8}
            />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;