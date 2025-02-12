import React, {useState} from 'react';
import supabase from '../helper/supabaseClient';
import { Link, useNavigate } from 'react-router';

import orbe from '../assets/orbe.gif'
import blueOrbe from '../assets/blueOrbe.gif'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       setMessage('');

       const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
       })

         if (error) {
          setMessage(error.message);
          setEmail('');
          setPassword('');
          return;
         }

         if (data) {
          navigate('/dashboard');
          return null
         }
    };

  return (
    <div>
      <h1>Login</h1>
    <div>    
    </div>

    <div className='login-container'>
    <img src={orbe} alt="Vite logo" className="logo"/>
    <img src={blueOrbe} alt="Vite logo" className="logo react"/>
    <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Log in</button>
            <p>{message}</p>
        </form>
        <span>Don't have an account? </span>
        <Link to="/Register">Register</Link>
    </div>
    </div>
  );
}

export default Login;