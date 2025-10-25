import "./App.css";
import Logo from "./assets/Logo.png";
import Hero from "./assets/Hero.png";
import Relatorios from "./assets/Relatorios.png";
import WhatsApphatsapp from "./assets/Whatsapp.png";
import Gastos from "./assets/Gastos.png";

function App() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo Zeni" />
          <h1>Zeni</h1>
        </div>

        <nav>
          
        </nav>

        <div className="buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Registre-se</button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero" style={{ backgroundImage: `url(${Hero})` }}>
        <div className="hero-content">
          <h1>Comece agora a organizar suas finanças</h1>
          <button>Cadastre-se</button>
        </div>
      </section>

      {/* ===== CARDS ===== */}
      <section className="cards">
        <div className="card">
          <img src={Relatorios} alt="Relatórios" />
          <p>
            Registre gastos e peça relatórios direto no WhatsApp. Rápido e
            prático, sem complicações.
          </p>
        </div>

        <div className="card">
          <img src={WhatsApphatsapp} alt="Análises" />
          <p>
            Tenha acesso a análises completas de suas finanças pela web ou
            WhatsApp, sempre que precisar.
          </p>
        </div>

        <div className="card">
          <img src={Gastos} alt="Mapeie" />
          <p>
            Descubra onde e com o que você mais gasta para tomar decisões mais
            conscientes.
          </p>
        </div>
      </section>

      {/* ===== HISTÓRIA ===== */}
      <section className="historia">
        <h2>A História da Zeni Finanças</h2>
        <p>
          A Zeni nasceu de uma ideia simples: ajudar pessoas comuns a entender
          melhor o próprio dinheiro. Tudo começou com um grupo de amigos
          cansados de planilhas confusas e aplicativos cheios de anúncios,
          decidiram criar uma ferramenta diferente.
        </p>
        <p>
          O objetivo era claro - tornar o controle financeiro algo fácil, rápido
          e acessível a todos. Com o tempo, a Zeni cresceu e transformou-se em
          uma plataforma inteligente que conecta tecnologia, praticidade e
          propósito. Hoje, ela é o resultado de muitas noites de café, códigos e
          sonhos. Surgindo uma aliada para quem quer alcançar estabilidade e
          liberdade financeira.
        </p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        © 2025 Zeni Finanças — Todos os direitos reservados.
      </footer>
    </>
  );
}

export default App;
