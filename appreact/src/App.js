import './css/estilo.css';
import maquina from './imagens/maquina.png';
import garoto from './imagens/garoto.png';
import logo from './imagens/logo.png';
import atuacao from './imagens/atuacao.png';
import mulhersentada from './imagens/mulhersentada.jpg';
import consultoria from './imagens/consultoria.png';

import estrutura1 from './imagens/estrutura1.jpg';
import estrutura2 from './imagens/estrutura2.jpg';
import estrutura3 from './imagens/estrutura3.jpg';
import estrutura4 from './imagens/estrutura4.jpg';
import estrutura5 from './imagens/estrutura5.jpg';
import estrutura6 from './imagens/estrutura6.jpg';
import revistas from './imagens/revistas.png';

import folhetos from './imagens/folhetos.png';
import impressora from './imagens/impressora.png';

function App() {
  return (
    <>
      <div class="d-md-none" id="toggle-menu">
        <button
          id="toggle-menu-btn"
          class="hamburger hamburger--stand"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <header>
        <nav class="menu">
          <a class="brand" href="#">
            <img class="img-fluid" src={logo} alt="" />
          </a>

          <ul>
            <li>
              <a class="button" href="#home">
                Home
              </a>
            </li>
            <li>
              <a class="button" href="#servicos">
                Serviços
              </a>
            </li>
            <li>
              <a class="button" href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a class="button" href="#quemsomos">
                Quem Somos
              </a>
            </li>
            <li>
              <a class="button" href="#contato">
                Contato
              </a>
            </li>
            <li>
              <a class="button" href="#arquivos">
                Arquivos
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section class="section" id="home">
        <div class="container">
          <div class="row">
            <div class="col-md-12 d-flex align-items-center justify-content-center">
              <span>
                Especialista em
                <br />
                Folhetos Promocionais
              </span>
            </div>
          </div>
        </div>
      </section>
      <section class="caixa">
        <div class="container">
          <div class="row albuns">
            <div class="col-md-6 capa">
              <img src={maquina} class="img-fluid" />
            </div>

            <div class="col-md-6 d-flex" id="first-text">
              <div class="align-self-center">
                <h3>Bem-Vindo</h3>

                <h2>
                  A forma simples e direta de se comunicar com o seu consumidor
                </h2>

                <p>
                  Mesmo em um mundo cada vez mais digital, 56% dos consumidores
                  leem folhetos promocionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="caixa">
        <div class="container">
          <div class="row albuns">
            <div class="col-md-6 d-flex" id="second-text">
              <div class="align-self-center">
                <h3>Bem-Vindo</h3>

                <h2>
                  Trabalhamos para
                  <br /> diversos segmentos
                </h2>

                <p>
                  De farmácias a concessionárias de veículos. De supermercados a
                  construção civil.
                </p>

                <img src={atuacao} class="img-fluid" />
              </div>
            </div>

            <div class="col-md-6 capa">
              <img src={garoto} class="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section id="servicos" class="caixa">
        <div class="container">
          <div class="row albuns">
            <div class="col-md-6 capa">
              <img src={mulhersentada} class="img-fluid" />
            </div>

            <div class="col-md-6 d-flex" id="third-text">
              <div class="align-self-center">
                <h3>Bem-Vindo</h3>

                <h2>
                  A forma simples e direta de se comunicar com o seu consumidor
                </h2>

                <ul class="lista-icones">
                  <li>
                    <img class="img-fluid" src={revistas} alt="" />
                    folhetos proporcionais
                  </li>

                  <li>
                    <img class="img-fluid" src={consultoria} alt="" />
                    Tabloidee
                  </li>

                  <li>
                    <img class="img-fluid" src={folhetos} alt="" /> consultoria
                    em distribuição
                  </li>

                  <li>
                    <img class="img-fluid" src={impressora} alt="" />
                    Entrega com acompanhamento On-line
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="quemsomos" class="d-flex sobre caixa">
        <div class="container align-self-center">
          <div class="row">
            <div class="col-md-12 capa espaco">
              <div class="espaco" id="quarto-texto">
                <h2>Sobre nós</h2>
                <div class="divisor"></div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="caixa" id="estrutura">
        <h4>Conheça nossa moderna estrutura</h4>

        <div class="row">
          <div class="col-md-4">
            <div
              id="carousel-controles"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={estrutura1} class="img-fluid"></img>
                </div>

                <div class="carousel-item">
                  <img src={estrutura5} class="img-fluid"></img>
                </div>

                <div class="carousel-item">
                  <img src={estrutura3} class="img-fluid"></img>
                </div>
              </div>

              <a
                href="#carousel-controles"
                class="carousel-control-prev"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </a>

              <a
                href="#carousel-controles"
                class="carousel-control-next"
                data-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>

          <div class="col-md-4">
            <div
              id="carousel-controles2"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={estrutura4} class="img-fluid"></img>
                </div>

                <div class="carousel-item">
                  <img src={estrutura5} class="img-fluid"></img>
                </div>

                <div class="carousel-item">
                  <img src={estrutura6} class="img-fluid"></img>
                </div>
              </div>

              <a
                href="#carousel-controles2"
                class="carousel-control-prev"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </a>

              <a
                href="#carousel-controles2"
                class="carousel-control-next"
                data-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>

          <div class="col-md-4">
            <div
              id="carousel-controles3"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={estrutura5} class="img-fluid"></img>
                </div>

                <div class="carousel-item">
                  <img src={estrutura2} class="img-fluid"></img>
                </div>

                <div class="carousel-item">
                  <img src={estrutura5} class="img-fluid"></img>
                </div>
              </div>

              <a
                href="#carousel-controles3"
                class="carousel-control-prev"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </a>

              <a
                href="#carousel-controles3"
                class="carousel-control-next"
                data-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h4>Address</h4>

              <h3>
                X. XXXX XXXX 130 XXXXXXX XXXXXXXXX XXXXX XX
                <br />
                XXXXXXX (XX) XXXX-XXXX
              </h3>
            </div>

            <div class="col-md-4">
              <h4>Address</h4>

              <h3>
                X. XXXX XXXX 130 XXXXXXX XXXXXXXXX XXXXX XX
                <br />
                XXXXXXX (XX) XXXX-XXXX
              </h3>
            </div>

            <div class="col-md-4">
              <h4>Address</h4>

              <h3>
                X. XXXX XXXX 130 XXXXXXX XXXXXXXXX XXXXX XX
                <br />
                XXXXXXX (XX) XXXX-XXXX
              </h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
