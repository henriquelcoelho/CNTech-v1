import React, { useState } from 'react';
import { useAuth } from './src/contexts/AuthContext';
import AuthModal from './src/components/AuthModal';
import AdminDashboard from './src/components/AdminDashboard';
import ProtectedRoute from './src/components/ProtectedRoute';

function App() {
  const { user, isAuthenticated, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = async (credentials) => {
    // Implementar lógica de login aqui
    console.log('Login attempt:', credentials);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    logout();
    setCurrentPage('home');
  };

  const renderHeader = () => (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>CNTech</h1>
        </div>
        
        <nav className="nav">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Início
          </button>
          <button 
            className={`nav-link ${currentPage === 'courses' ? 'active' : ''}`}
            onClick={() => setCurrentPage('courses')}
          >
            Cursos
          </button>
          <button 
            className={`nav-link ${currentPage === 'devotional' ? 'active' : ''}`}
            onClick={() => setCurrentPage('devotional')}
          >
            Devocional
          </button>
          <button 
            className={`nav-link ${currentPage === 'blog' ? 'active' : ''}`}
            onClick={() => setCurrentPage('blog')}
          >
            Blog
          </button>
          <button 
            className={`nav-link ${currentPage === 'events' ? 'active' : ''}`}
            onClick={() => setCurrentPage('events')}
          >
            Eventos
          </button>
        </nav>

        <div className="header-actions">
          {isAuthenticated ? (
            <div className="user-menu">
              <span className="user-name">Olá, {user?.name}</span>
              {user?.role === 'admin' && (
                <button 
                  className="btn-secondary"
                  onClick={() => setCurrentPage('admin')}
                >
                  Admin
                </button>
              )}
              <button className="btn-outline" onClick={handleLogout}>
                Sair
              </button>
            </div>
          ) : (
            <button 
              className="btn-primary"
              onClick={() => setShowAuthModal(true)}
            >
              Entrar
            </button>
          )}
        </div>
      </div>
    </header>
  );

  const renderHomePage = () => (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindo à Comunidade das Nações</h1>
          <p>Conectando pessoas através da tecnologia e fé</p>
          <div className="hero-buttons">
            <button className="btn-primary">Explorar Cursos</button>
            <button className="btn-secondary">Saiba Mais</button>
          </div>
        </div>
      </section>

      {/* CNTech Courses */}
      <section className="courses-section">
        <div className="container">
          <h2>Trilhas CNTech</h2>
          <div className="courses-grid">
            <div className="course-card">
              <h3>Frontend Development</h3>
              <p>Aprenda React, Vue.js e desenvolvimento web moderno</p>
              <button className="btn-primary">Começar</button>
            </div>
            <div className="course-card">
              <h3>Backend Development</h3>
              <p>Node.js, Python, APIs e desenvolvimento de servidores</p>
              <button className="btn-primary">Começar</button>
            </div>
            <div className="course-card">
              <h3>Mobile Development</h3>
              <p>React Native, Flutter e desenvolvimento mobile</p>
              <button className="btn-primary">Começar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Devotional */}
      <section className="devotional-section">
        <div className="container">
          <h2>Devocional do Dia</h2>
          <div className="devotional-card">
            <h3>Confiança em Deus</h3>
            <p>"Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento." - Provérbios 3:5</p>
            <button className="btn-secondary">Ler Mais</button>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="blog-section">
        <div className="container">
          <h2>Blog dos Líderes</h2>
          <div className="blog-grid">
            <article className="blog-card">
              <h3>O Poder da Comunidade</h3>
              <p>Como a tecnologia pode unir pessoas e fortalecer laços...</p>
              <span className="blog-date">15 Jan 2024</span>
            </article>
            <article className="blog-card">
              <h3>Inovação e Fé</h3>
              <p>Equilibrando o desenvolvimento tecnológico com valores espirituais...</p>
              <span className="blog-date">12 Jan 2024</span>
            </article>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="events-section">
        <div className="container">
          <h2>Próximos Eventos</h2>
          <div className="events-grid">
            <div className="event-card">
              <h3>Workshop de React</h3>
              <p>20 Jan 2024 • 14:00</p>
              <button className="btn-primary">Participar</button>
            </div>
            <div className="event-card">
              <h3>Encontro de Oração</h3>
              <p>22 Jan 2024 • 19:00</p>
              <button className="btn-primary">Participar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>CNTech</h3>
              <p>Comunidade das Nações Tech</p>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>contato@cntech.com</p>
              <p>(11) 99999-9999</p>
            </div>
            <div className="footer-section">
              <h4>Redes Sociais</h4>
              <div className="social-links">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">YouTube</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 CNTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'admin':
        return (
          <ProtectedRoute requireAdmin={true}>
            <AdminDashboard />
          </ProtectedRoute>
        );
      case 'home':
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="app">
      {currentPage !== 'admin' && renderHeader()}
      
      <main className="main-content">
        {renderContent()}
      </main>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;

