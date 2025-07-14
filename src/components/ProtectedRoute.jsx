import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { user, isAuthenticated, loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="auth-required">
        <div className="auth-required-content">
          <h2>Acesso Restrito</h2>
          <p>Você precisa estar logado para acessar esta página.</p>
          <button className="btn-primary" onClick={() => window.location.href = '/'}>
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  if (requireAdmin && !isAdmin()) {
    return (
      <div className="auth-required">
        <div className="auth-required-content">
          <h2>Acesso Negado</h2>
          <p>Você não tem permissão para acessar esta área administrativa.</p>
          <button className="btn-primary" onClick={() => window.location.href = '/'}>
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;

