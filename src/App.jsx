import React from 'react';
import appPreviewImage from './assets/image.jpg';
import howItWorksImage from './assets/image1.jpg';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const CloudUploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
);


export default function App() {
  return (
    <>
      <style>{`
        :root {
          --primary-color: #6366F1; /* Roxo principal */
          --primary-hover: #4F46E5;
          --text-dark: #1F2937;
          --text-light: #4B5563;
          --bg-light: #F9FAFB;
          --bg-white: #FFFFFF;
          --border-radius: 0.5rem;
          --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: var(--text-dark);
          background-color: var(--bg-white);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header */
        .header {
          background-color: var(--bg-white);
          box-shadow: var(--shadow);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .header .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary-color);
        }
        .nav-links a {
          color: var(--text-light);
          text-decoration: none;
          margin-left: 2rem;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: var(--primary-color);
        }
        .nav-button {
          background-color: var(--primary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          text-decoration: none;
          transition: background-color 0.3s;
        }
        .nav-button:hover {
          background-color: var(--primary-hover);
        }
        .mobile-menu-button { display: none; }

        /* Hero Section */
        .hero {
          text-align: center;
          padding: 5rem 0;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .hero h1 .highlight {
          color: var(--primary-color);
        }
        .hero p {
          font-size: 1.125rem;
          color: var(--text-light);
          max-width: 600px;
          margin: 0 auto 2rem auto;
        }
        .hero .cta-button {
          font-size: 1.125rem;
          background-color: var(--primary-color);
          color: white;
          font-weight: bold;
          padding: 1rem 2rem;
          border-radius: var(--border-radius);
          text-decoration: none;
          transition: transform 0.3s, background-color 0.3s;
          display: inline-block;
        }
        .hero .cta-button:hover {
          background-color: var(--primary-hover);
          transform: scale(1.05);
        }

        .hero-image {
            margin-top: 4rem;
            max-width: 896px;
            width: 100%;
            height: auto;
            border-radius: var(--border-radius);
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }

        .image-placeholder {
          background-color: #E5E7EB;
          height: 24rem;
          width: 100%;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9CA3AF;
        }
        
        /* Features Section */
        .features {
          padding: 6rem 0;
          background-color: var(--bg-light);
        }
        .section-title { text-align: center; margin-bottom: 4rem; }
        .section-title h2 { font-size: 2.25rem; font-weight: bold; }
        .section-title p { color: var(--text-light); max-width: 600px; margin: 1rem auto 0 auto; }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        .feature-card {
          text-align: center;
          padding: 2rem;
          background-color: var(--bg-white);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
        }
        .feature-card h3 { font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem; }
        .feature-card p { color: var(--text-light); }
        .feature-icon {
          width: 3rem;
          height: 3rem;
          color: var(--primary-color);
          margin: 0 auto 1rem auto;
        }

        /* How It Works Section */
        .how-it-works { padding: 6rem 0; }
        .how-it-works-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 3rem;
        }
        .steps { width: 50%; }
        .step { display: flex; align-items: flex-start; margin-bottom: 2rem; }
        .step-number {
            flex-shrink: 0;
            background-color: var(--primary-color);
            color: white;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.25rem;
            margin-right: 1rem;
        }
        .step h3 { font-size: 1.25rem; font-weight: bold; margin: 0 0 0.25rem 0; }
        .step p { color: var(--text-light); margin: 0; }
        
        /* CSS para a segunda imagem */
        .how-it-works-image {
            width: 50%;
            height: auto;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }

        .cta-section {
          background-color: #4338CA;
          color: white;
          padding: 5rem 0;
          text-align: center;
        }
        .cta-section h2 { font-size: 2.25rem; font-weight: bold; margin-bottom: 1rem; }
        .cta-section p { color: #A5B4FC; max-width: 600px; margin: 0 auto 2rem auto; }
        .cta-section .cta-button {
          background-color: var(--primary-color);
          color: white;
        }
        .cta-section .cta-button:hover {
          background-color: var(--primary-hover);
        }

        /* Footer */
        .footer {
          background-color: var(--text-blue-900);
          color: black;
          padding: 2rem 0;
          text-align: center;
        }
        .footer p { margin: 0; }
        .footer .subtitle { color: #9CA3AF; margin-top: 0.5rem; }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-menu-button { display: block; }
          .hero h1 { font-size: 2.5rem; }
          .features-grid { grid-template-columns: 1fr; }
          .how-it-works-content { 
            flex-direction: column; 
            gap: 4rem;
          }
          .how-it-works-image, .steps { 
            width: 100%; 
          }
        }
      `}</style>
      
      <div className="app-wrapper">
        <header className="header">
          <div className="container">
            <div className="logo">Quantum Tarefas</div>
            <nav className="nav-links">
              <a href="#features">Funcionalidades</a>
              <a href="#how-it-works">Como Funciona</a>
              <a href="#cta" className="nav-button">Comece Agora</a>
            </nav>
            <button className="mobile-menu-button">
              <MenuIcon />
            </button>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <h1>Organize sua vida acadêmica. <br/> <span className="highlight">Alcance o seu potencial máximo.</span></h1>
              <p>Quantum Tarefas é a ferramenta definitiva para estudantes que buscam excelência. Gerencie seus trabalhos, prazos e materiais em um só lugar.</p>
              <a href="#cta" className="cta-button">Crie sua conta gratuitamente</a>
              
              <img 
                src={appPreviewImage} 
                alt="Demonstração do aplicativo Quantum Tarefas em um celular" 
                className="hero-image"
              />

            </div>
          </section>

          <section id="features" className="features">
            <div className="container">
              <div className="section-title">
                <h2>Tudo que você precisa para se organizar</h2>
                <p>Recursos pensados para simplificar sua rotina e aumentar sua produtividade.</p>
              </div>
              <div className="features-grid">
                <div className="feature-card">
                  <CalendarIcon />
                  <h3>Prazos Inteligentes</h3>
                  <p>Visualize suas tarefas ordenadas por data de entrega e nunca mais perca um prazo importante.</p>
                </div>
                <div className="feature-card">
                  <CloudUploadIcon />
                  <h3>Central de Materiais</h3>
                  <p>Faça upload de arquivos, adicione links e anexe mídias diretamente nas suas tarefas.</p>
                </div>
                <div className="feature-card">
                  <CheckCircleIcon />
                  <h3>Controle de Status</h3>
                  <p>Acompanhe o progresso de cada atividade, desde "A Fazer" até "Concluído", de forma visual e intuitiva.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="how-it-works" className="how-it-works">
            <div className="container">
              <div className="section-title">
                <h2>Comece a usar em 3 passos simples</h2>
              </div>
              <div className="how-it-works-content">
                  <img 
                    src={howItWorksImage} 
                    alt="Ilustração dos passos para usar o aplicativo" 
                    className="how-it-works-image" 
                  />
                  <div className="steps">
                      <div className="step">
                          <div className="step-number">1</div>
                          <div>
                              <h3>Crie sua Conta</h3>
                              <p>O cadastro é rápido, seguro e gratuito. Em menos de um minuto você já pode começar.</p>
                          </div>
                      </div>
                      <div className="step">
                          <div className="step-number">2</div>
                          <div>
                              <h3>Cadastre suas Tarefas</h3>
                              <p>Adicione seus trabalhos e projetos, definindo prazos, descrições e anexando materiais de apoio.</p>
                          </div>
                      </div>
                      <div className="step">
                          <div className="step-number">3</div>
                          <div>
                              <h3>Acompanhe seu Progresso</h3>
                              <p>Com tudo organizado, foque no que realmente importa: seus estudos. Deixe que a gente te lembre dos prazos.</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </section>

          <section id="cta" className="cta-section">
            <div className="container">
              <h2>Pronto para transformar sua vida acadêmica?</h2>
              <p>Junte-se a milhares de estudantes que já estão otimizando seus estudos com o Quantum Tarefas.</p>
              <a href="#" className="cta-button">Começar a usar agora</a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Quantum Tarefas</p>
            <p className="subtitle">Um projeto para facilitar a vida universitária.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

