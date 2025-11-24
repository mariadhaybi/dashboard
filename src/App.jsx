import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '@/components/protected-route';
import { LoginForm } from '@/features/auth/components/login-form';
import { DashboardPage } from '@/features/dashboard/dashboard-page';

const LoginPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-muted/40">
    <LoginForm />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
