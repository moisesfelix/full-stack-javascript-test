import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setAuth } = React.useContext(AuthContext);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', {
                email,
                password
            });
            const token = response.data.token;

            // Armazena o token no localStorage
            localStorage.setItem('token', token);
            setAuth(true);

            console.log(response.data); // Sucesso no login
            navigate('/');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
