# CNTech-v1 - Comunidade das Nações Tech Platform

Uma plataforma moderna que une tecnologia e fé, oferecendo cursos de programação, devocionais diários, blog dos líderes e sistema de administração completo.

## 🚀 Funcionalidades

### 🏠 Página Inicial
- **Hero Section** com chamada para ação
- **Trilhas CNTech** - Cursos de Frontend, Backend e Mobile Development
- **Devocional do Dia** - Reflexões espirituais
- **Blog dos Líderes** - Artigos sobre tecnologia e fé
- **Próximos Eventos** - Workshops e encontros

### 🔐 Sistema de Autenticação
- **Login/Registro** com modal elegante
- **Contexto de Autenticação** para gerenciar estado do usuário
- **Rotas Protegidas** para áreas administrativas
- **Persistência de Sessão** com localStorage

### 👨‍💼 Dashboard Administrativo
- **Visão Geral** com estatísticas em tempo real
- **Gerenciamento de Usuários** - CRUD completo
- **Gerenciamento de Cursos** - Criação e edição
- **Analytics** - Métricas de performance
- **Configurações** - Personalização da plataforma

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **CSS Puro** - Estilização sem dependências externas
- **Context API** - Gerenciamento de estado
- **LocalStorage** - Persistência de dados

## 📁 Estrutura do Projeto

```
CNTech-v1/
├── src/
│   ├── components/
│   │   ├── AuthModal.jsx          # Modal de autenticação
│   │   ├── AdminDashboard.jsx     # Dashboard administrativo
│   │   └── ProtectedRoute.jsx     # Rota protegida
│   ├── contexts/
│   │   └── AuthContext.jsx        # Contexto de autenticação
│   ├── App.jsx                    # Componente principal
│   ├── main.jsx                   # Ponto de entrada
│   └── index.css                  # Estilos globais
├── package.json
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone https://github.com/henriquelcoelho/CNTech-v1.git
cd CNTech-v1

# Instale as dependências
pnpm install

# Execute o servidor de desenvolvimento
pnpm dev
```

### Acesse a aplicação
- **URL Local**: http://localhost:5173
- **Página Inicial**: Interface principal com navegação
- **Admin**: Clique em "Entrar" e use um email com "admin" para acessar o dashboard

## 🎨 Design System

### Cores Principais
- **Primária**: Gradiente `#667eea` → `#764ba2`
- **Secundária**: Gradiente `#f093fb` → `#f5576c`
- **Neutra**: `#1f2937`, `#6b7280`, `#f8fafc`

### Tipografia
- **Fonte**: Inter (fallback para system fonts)
- **Títulos**: 700 weight
- **Corpo**: 400-500 weight

### Componentes
- **Botões**: Gradientes com hover effects
- **Cards**: Sombras suaves e bordas arredondadas
- **Modais**: Backdrop blur e animações
- **Tabelas**: Design limpo com hover states

## 🔧 Funcionalidades Técnicas

### Sistema de Autenticação
```javascript
// Exemplo de uso do contexto
const { user, isAuthenticated, login, logout } = useAuth();

// Login
const handleLogin = async (credentials) => {
  const result = await login(credentials);
  if (result.success) {
    // Redirecionar ou atualizar UI
  }
};
```

### Rotas Protegidas
```javascript
// Proteger componente que requer admin
<ProtectedRoute requireAdmin={true}>
  <AdminDashboard />
</ProtectedRoute>
```

### Dashboard Responsivo
- **Desktop**: Sidebar fixa com navegação lateral
- **Mobile**: Sidebar colapsável com toggle
- **Tabelas**: Scroll horizontal em telas pequenas

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔒 Segurança

- **Autenticação**: Sistema de login/registro
- **Autorização**: Controle de acesso por roles
- **Proteção de Rotas**: Middleware para áreas restritas
- **Validação**: Verificação de dados de entrada

## 🚀 Deploy

### Build para Produção
```bash
pnpm build
```

### Servir Build
```bash
pnpm preview
```

## 📈 Próximas Funcionalidades

- [ ] **Integração com Backend** (Supabase/Firebase)
- [ ] **Sistema de Pagamentos** (Stripe)
- [ ] **Chat em Tempo Real** (WebSocket)
- [ ] **Upload de Arquivos** (AWS S3)
- [ ] **Notificações Push** (Service Workers)
- [ ] **PWA** (Progressive Web App)
- [ ] **Testes Automatizados** (Jest/Vitest)
- [ ] **CI/CD** (GitHub Actions)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Henrique Coelho**
- GitHub: [@henriquelcoelho](https://github.com/henriquelcoelho)
- Email: contato@cntech.com

## 🙏 Agradecimentos

- Comunidade das Nações
- Equipe de desenvolvimento
- Contribuidores e testadores

---

**CNTech-v1** - Conectando pessoas através da tecnologia e fé 🚀 