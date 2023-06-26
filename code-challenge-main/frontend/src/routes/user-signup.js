import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/auth/signup', {
                name,
                email,
                password
            });
            console.log(response.data); // Sucesso no cadastro
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;
