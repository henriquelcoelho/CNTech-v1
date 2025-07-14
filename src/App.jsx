import React from 'react'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">Comunidade das Nações</div>
          <nav>
            <ul className="nav-menu">
              <li><a href="#home">Início</a></li>
              <li><a href="#cntech">CNTech</a></li>
              <li><a href="#devocional">Devocional</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#eventos">Eventos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Bem-vindo à Comunidade das Nações</h1>
          <p>Uma igreja que une fé e tecnologia, criando um espaço onde a espiritualidade e a inovação se encontram para transformar vidas.</p>
          <a href="#cntech" className="cta-button">Conheça o CNTech</a>
        </div>
      </section>

      {/* CNTech Section */}
      <section className="cntech" id="cntech">
        <div className="cntech-content">
          <h2 className="section-title">CNTech - Cursos de Tecnologia</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2rem' }}>
            Formação completa em tecnologias emergentes para preparar você para o futuro
          </p>
          
          <div className="courses-grid">
            <div className="course-card ai">
              <h3>Inteligência Artificial</h3>
              <p>Aprenda os fundamentos da IA, machine learning e como aplicar essas tecnologias em projetos reais.</p>
              <div className="duration">Duração: 12 semanas</div>
            </div>
            
            <div className="course-card blockchain">
              <h3>Blockchain & Criptomoedas</h3>
              <p>Explore o mundo das criptomoedas, smart contracts e desenvolvimento blockchain.</p>
              <div className="duration">Duração: 10 semanas</div>
            </div>
            
            <div className="course-card web3">
              <h3>Web3 & DeFi</h3>
              <p>Desenvolva aplicações descentralizadas e entenda o ecossistema DeFi.</p>
              <div className="duration">Duração: 8 semanas</div>
            </div>
            
            <div className="course-card cybersecurity">
              <h3>Cibersegurança</h3>
              <p>Proteja sistemas e dados com as melhores práticas de segurança digital.</p>
              <div className="duration">Duração: 14 semanas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Devocional Section */}
      <section className="devocional" id="devocional">
        <div className="devocional-content">
          <h2 className="section-title">Devocional Diário</h2>
          
          <div className="devocional-card">
            <h3>Fé e Tecnologia: Uma Parceria Divina</h3>
            <div className="date">15 de Janeiro, 2024</div>
            <p>
              "Porque para Deus nada é impossível" (Lucas 1:37). Esta verdade bíblica nos lembra que, 
              assim como Deus criou o universo com perfeição, Ele também nos deu a capacidade de criar 
              e inovar através da tecnologia. Quando alinhamos nossa fé com o desenvolvimento tecnológico, 
              podemos ser instrumentos de transformação positiva no mundo.
            </p>
          </div>
          
          <div className="devocional-card">
            <h3>Inovação com Propósito</h3>
            <div className="date">14 de Janeiro, 2024</div>
            <p>
              "Tudo o que fizerem, façam de todo o coração, como para o Senhor" (Colossenses 3:23). 
              Esta passagem nos ensina que nossa dedicação ao desenvolvimento tecnológico deve ser 
              feita com excelência e propósito divino. Que possamos usar nossos talentos para glorificar 
              a Deus e servir ao próximo.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog" id="blog">
        <div className="blog-content">
          <h2 className="section-title">Blog & Notícias</h2>
          
          <div className="blog-grid">
            <article className="blog-card">
              <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop" alt="Tecnologia" />
              <div className="blog-card-content">
                <h3>O Futuro da Igreja Digital</h3>
                <p>Como a tecnologia está transformando a forma como nos conectamos e adoramos.</p>
                <a href="#" className="read-more">Ler mais →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop" alt="Desenvolvimento" />
              <div className="blog-card-content">
                <h3>Desenvolvimento Web com Propósito</h3>
                <p>Como criar aplicações que não apenas funcionam, mas fazem a diferença no mundo.</p>
                <a href="#" className="read-more">Ler mais →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop" alt="IA" />
              <div className="blog-card-content">
                <h3>IA e Ética Cristã</h3>
                <p>Reflexões sobre como usar a inteligência artificial de forma responsável e ética.</p>
                <a href="#" className="read-more">Ler mais →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events" id="eventos">
        <div className="events-content">
          <h2 className="section-title">Próximos Eventos</h2>
          
          <div className="events-grid">
            <div className="event-card">
              <h3>Workshop de Blockchain</h3>
              <div className="date">20 de Janeiro, 2024</div>
              <p>Aprenda os fundamentos do blockchain e como criar seu primeiro smart contract.</p>
              <div className="location">📍 Comunidade das Nações - São Paulo</div>
            </div>
            
            <div className="event-card">
              <h3>Encontro de Desenvolvedores</h3>
              <div className="date">25 de Janeiro, 2024</div>
              <p>Networking e compartilhamento de experiências entre desenvolvedores cristãos.</p>
              <div className="location">📍 Comunidade das Nações - São Paulo</div>
            </div>
            
            <div className="event-card">
              <h3>Palestra: IA e Futuro do Trabalho</h3>
              <div className="date">30 de Janeiro, 2024</div>
              <p>Como se preparar para as mudanças que a inteligência artificial trará ao mercado.</p>
              <div className="location">📍 Comunidade das Nações - São Paulo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contato">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Comunidade das Nações</h3>
            <p>Uma igreja que une fé e tecnologia para transformar vidas e impactar o mundo.</p>
          </div>
          
          <div className="footer-section">
            <h3>CNTech</h3>
            <a href="#cntech">Cursos</a>
            <a href="#eventos">Eventos</a>
            <a href="#blog">Blog</a>
          </div>
          
          <div className="footer-section">
            <h3>Contato</h3>
            <p>📍 São Paulo, SP</p>
            <p>📧 contato@comunidadenacoes.com</p>
            <p>📱 (11) 99999-9999</p>
          </div>
          
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Comunidade das Nações. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App 