import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove o token e o nome do usuário do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userName');

    // Redireciona para a página de login
    navigate('/login');
  };

  return (
    <header className="header-container">
      {isLoggedIn && (
        <div className="header-content">
          <h1 className="header-title">Hello, {userName}!</h1>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
