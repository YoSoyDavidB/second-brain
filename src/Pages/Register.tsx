import React, {useState} from 'react';
import supabase from '../helper/supabaseClient';
import {Link} from 'react-router';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       setMessage('');

       const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
       })

         if (error) {
          setMessage(error.message);
          return;
         }

         if (data) {
          setMessage('User created successfully. Please check your email for verification');
         }

         setEmail('');
         setPassword('');
    };

    return (
      <div>
        <h1>Register</h1>

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
            <button type="submit">Register</button>
            <p>{message}</p>
        </form>
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    );
  }
  
  export default Register;