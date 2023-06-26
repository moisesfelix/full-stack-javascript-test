import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import './styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setAuth } = React.useContext(AuthContext);

    const handleLogin = async () => {
        // Validação do email
        if (!email) {
            setEmailError('Por favor, insira seu email');
        } else {
            setEmailError('');
        }

        // Validação da senha
        if (!password) {
            setPasswordError('Por favor, insira sua senha');
        } else {
            setPasswordError('');
        }

        // Verifica se há erros de validação
        if (!email || !password) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', {
                email,
                password,
            });
            const { token, name: userName } = response.data;

            // Armazena o token no localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName);
            setAuth(true);

            console.log(response.data); // Sucesso no login

            navigate('/');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                />
                {emailError && <p className="input-error error">{emailError}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                {passwordError && <p className="input-error error">{passwordError}</p>}
            </div>
            <button onClick={handleLogin} className="login-button">
                Login
            </button>
            <p className="or-text">ou</p>
            <Link to="/register" className="register-link">
                <button className="register-button">Register</button>
            </Link>
        </div>
    );
};

export default Login;
