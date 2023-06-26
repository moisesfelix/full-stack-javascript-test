import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/SignUp.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();

        // Validação do nome
        if (!name) {
            setNameError('Por favor, insira seu nome');
        } else {
            setNameError('');
        }

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
        if (!name || !email || !password) {
            return;
        }

        try {
            const response = await axios.post('/api/auth/signup', {
                name,
                email,
                password,
            });

            if (response.status === 200) {
                setSuccessMessage('Cadastro realizado com sucesso! Redirecionando para a página de login em 3 segundos...');
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError('');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form onSubmit={handleSignUp} className="signup-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        className="signup-input"
                    />
                    {nameError && <p className="input-error error">{nameError}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className="signup-input"
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
                        onChange={handlePasswordChange}
                        className="signup-input"
                    />
                    {passwordError && <p className="input-error error">{passwordError}</p>}
                </div>
                <button type="submit" className="register-button ">
                    Register
                </button>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
            <div className="login-link">
                <p>or</p>
                <button className="login-button" onClick={handleLoginClick}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default SignUp;
