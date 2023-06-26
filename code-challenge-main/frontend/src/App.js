import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';

import PaymentCreate from './routes/payment-create';
import PaymentsList from './routes/payments-list';
import UserLogin from './routes/user-login';
import UserSignup from './routes/user-signup';
import Header from './components/Header';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserSignup />} />
          <Route path="/*" element={<PrivateRoutes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoutes() {
  const { user, logout } = useAuth();

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<PaymentsList />} />
        <Route path="/create" element={<PaymentCreate />} />
      </Routes>
    </div>
  );
}

export default App;
