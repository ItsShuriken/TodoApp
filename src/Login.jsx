import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='border-4 p-4 flex flex-col items-center space-y- w-min'>
      <h1 className='text-3xl text-blue-500'>
        Login
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
          className='border-2 border-blue-500'/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
          className='border-2 border-blue-500'/>
        </label>
        <br />
        <button type="submit"
        className='bg-blue-500 text-white rounded p-2 hover:bg-blue-700 mt-4'
        >
          Login
        </button>
      </form>

    </div>
    </div>
  )
}

export default Login