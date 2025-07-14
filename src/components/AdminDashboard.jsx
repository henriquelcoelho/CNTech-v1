import React, { useState } from 'react';
import { useToast } from '../contexts/ToastContext';

const AdminDashboard = () => {
  const { success, error, warning } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = {
    users: 1247,
    courses: 23,
    activeStudents: 892,
    revenue: 'R$ 45.230'
  };

  const recentUsers = [
    { id: 1, name: 'João Silva', email: 'joao@email.com', role: 'Estudante', date: '2024-01-15' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', role: 'Instrutor', date: '2024-01-14' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', role: 'Estudante', date: '2024-01-13' },
  ];

  const recentCourses = [
    { id: 1, title: 'React Avançado', instructor: 'Prof. Silva', students: 45, status: 'Ativo' },
    { id: 2, title: 'Node.js Backend', instructor: 'Prof. Santos', students: 32, status: 'Ativo' },
    { id: 3, title: 'TypeScript', instructor: 'Prof. Costa', students: 28, status: 'Em desenvolvimento' },
  ];

  const renderOverview = () => (
    <div className="admin-overview">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total de Usuários</h3>
          <p className="stat-number">{stats.users}</p>
          <span className="stat-change positive">+12% este mês</span>
        </div>
        <div className="stat-card">
          <h3>Cursos Disponíveis</h3>
          <p className="stat-number">{stats.courses}</p>
          <span className="stat-change positive">+3 novos</span>
        </div>
        <div className="stat-card">
          <h3>Estudantes Ativos</h3>
          <p className="stat-number">{stats.activeStudents}</p>
          <span className="stat-change positive">+8% esta semana</span>
        </div>
        <div className="stat-card">
          <h3>Receita Mensal</h3>
          <p className="stat-number">{stats.revenue}</p>
          <span className="stat-change positive">+15% este mês</span>
        </div>
      </div>

      <div className="recent-activity">
        <div className="recent-section">
          <h3>Usuários Recentes</h3>
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Função</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span></td>
                    <td>{user.date}</td>
                    <td>
                      <button 
                        className="action-btn edit"
                        onClick={() => {
                          success(`Editando usuário: ${user.name}`);
                        }}
                      >
                        Editar
                      </button>
                      <button 
                        className="action-btn delete"
                        onClick={() => {
                          warning(`Tem certeza que deseja excluir ${user.name}?`);
                        }}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="recent-section">
          <h3>Cursos Recentes</h3>
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Instrutor</th>
                  <th>Estudantes</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {recentCourses.map(course => (
                  <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>{course.instructor}</td>
                    <td>{course.students}</td>
                    <td><span className={`status-badge ${course.status.toLowerCase().replace(' ', '-')}`}>{course.status}</span></td>
                    <td>
                      <button 
                        className="action-btn edit"
                        onClick={() => {
                          success(`Editando curso: ${course.title}`);
                        }}
                      >
                        Editar
                      </button>
                      <button 
                        className="action-btn view"
                        onClick={() => {
                          success(`Visualizando curso: ${course.title}`);
                        }}
                      >
                        Ver
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="admin-users">
      <div className="section-header">
        <h2>Gerenciamento de Usuários</h2>
        <button 
          className="btn-primary"
          onClick={() => {
            success('Funcionalidade de adicionar usuário em desenvolvimento!');
          }}
        >
          Adicionar Usuário
        </button>
      </div>
      
      <div className="filters">
        <input type="text" placeholder="Buscar usuários..." className="search-input" />
        <select className="filter-select">
          <option value="">Todas as funções</option>
          <option value="admin">Administrador</option>
          <option value="instructor">Instrutor</option>
          <option value="student">Estudante</option>
        </select>
        <button 
          className="btn-secondary"
          onClick={() => {
            success('Filtros aplicados com sucesso!');
          }}
        >
          Filtrar
        </button>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Função</th>
              <th>Status</th>
              <th>Data de Criação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span></td>
                <td><span className="status-badge active">Ativo</span></td>
                <td>{user.date}</td>
                <td>
                  <button className="action-btn edit">Editar</button>
                  <button className="action-btn delete">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="admin-courses">
      <div className="section-header">
        <h2>Gerenciamento de Cursos</h2>
        <button 
          className="btn-primary"
          onClick={() => {
            success('Funcionalidade de criar curso em desenvolvimento!');
          }}
        >
          Criar Curso
        </button>
      </div>
      
      <div className="filters">
        <input type="text" placeholder="Buscar cursos..." className="search-input" />
        <select className="filter-select">
          <option value="">Todos os status</option>
          <option value="active">Ativo</option>
          <option value="draft">Rascunho</option>
          <option value="archived">Arquivado</option>
        </select>
        <button 
          className="btn-secondary"
          onClick={() => {
            success('Filtros aplicados com sucesso!');
          }}
        >
          Filtrar
        </button>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Instrutor</th>
              <th>Estudantes</th>
              <th>Status</th>
              <th>Data de Criação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recentCourses.map(course => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.instructor}</td>
                <td>{course.students}</td>
                <td><span className={`status-badge ${course.status.toLowerCase().replace(' ', '-')}`}>{course.status}</span></td>
                <td>2024-01-10</td>
                <td>
                  <button className="action-btn edit">Editar</button>
                  <button className="action-btn view">Ver</button>
                  <button className="action-btn delete">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'users':
        return renderUsers();
      case 'courses':
        return renderCourses();
      case 'analytics':
        return <div className="admin-analytics"><h2>Analytics</h2><p>Em desenvolvimento...</p></div>;
      case 'settings':
        return <div className="admin-settings"><h2>Configurações</h2><p>Em desenvolvimento...</p></div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>CNTech Admin</h2>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📊 Visão Geral
          </button>
          <button 
            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            👥 Usuários
          </button>
          <button 
            className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            📚 Cursos
          </button>
          <button 
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📈 Analytics
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Configurações
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <h1>{activeTab === 'overview' ? 'Dashboard' : 
                 activeTab === 'users' ? 'Usuários' :
                 activeTab === 'courses' ? 'Cursos' :
                 activeTab === 'analytics' ? 'Analytics' :
                 activeTab === 'settings' ? 'Configurações' : 'Dashboard'}</h1>
          </div>
          <div className="header-right">
            <div className="admin-profile">
              <span>Admin</span>
              <button 
                className="logout-btn"
                onClick={() => {
                  success('Logout realizado com sucesso!');
                  // Redirecionar para home após 1 segundo
                  setTimeout(() => {
                    window.location.href = '/';
                  }, 1000);
                }}
              >
                Sair
              </button>
            </div>
          </div>
        </header>

        <main className="admin-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

