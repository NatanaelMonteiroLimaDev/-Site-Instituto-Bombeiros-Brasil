const links = [
  ["Home", "index.html", "home"],
  ["Quem Somos", "pages/quem-somos.html", "quem-somos"],
  ["Áreas de Atuação", "pages/areas-de-atuacao.html", "areas-de-atuacao"],
  ["Projetos", "pages/servicos.html", "servicos"],
  ["Fomentos", "pages/projetos-e-fomentos.html", "projetos-e-fomentos"],
  ["Voluntários", "pages/voluntarios.html", "voluntarios"],
  ["Transparência", "pages/transparencia.html", "transparencia"],
  ["Blog", "pages/blog.html", "blog"],
  ["Contato", "pages/contato.html", "contato"],
];

const page = document.body.dataset.page || "home";
const depth = page === "home" ? "" : "../";

function pathFor(href) {
  return page === "home" ? href : `../${href}`;
}

function renderHeader() {
  const header = document.querySelector("#site-header");
  if (!header) return;

  const nav = links
    .map(([label, href, id]) => `<a class="${page === id ? "active" : ""}" href="${pathFor(href)}">${label}</a>`)
    .join("");

  header.innerHTML = `
    <header class="site-header">
      <div class="nav-shell">
        <a class="brand" href="${depth}index.html" aria-label="Ir para a página inicial">
          <img src="${depth}assets/favicon.png" alt="Instituto Bombeiros Brasil" width="68" height="68">
          <span>Instituto Bombeiros Brasil<small>IB Brasil - 1998</small></span>
        </a>
        <nav class="nav-links" aria-label="Navegação principal">${nav}</nav>
        <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false"><span></span></button>
      </div>
    </header>
  `;

  const button = header.querySelector(".menu-toggle");
  button.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col-brand">
            <div class="footer-brand">
              <img src="${depth}assets/logo-ibb.png" alt="Instituto Bombeiros Brasil" width="52" height="52">
              <strong>Instituto Bombeiros Brasil</strong>
            </div>
            <p>Consultoria, capacitação e apoio técnico para municípios em segurança pública, defesa civil e emergências.</p>
          </div>
          <div>
            <h3>Institucional</h3>
            <a href="${pathFor("pages/quem-somos.html")}">Quem somos</a>
            <a href="${pathFor("pages/areas-de-atuacao.html")}">Áreas de atuação</a>
            <a href="${pathFor("pages/transparencia.html")}">Transparência</a>
          </div>
          <div>
            <h3>Atendimento</h3>
            <a href="${pathFor("pages/servicos.html")}">Projetos</a>
            <a href="${pathFor("pages/projetos-e-fomentos.html")}">Fomentos</a>
            <a href="${pathFor("pages/contato.html")}">Contato</a>
          </div>
          <div>
            <h3>Contato</h3>
            <p>SAF Sul Quadra 02 Lote 09 Bloco "I"<br>Edifício Alvoran — CEP 70.070-600</p>
            <p><a href="mailto:contato@institutobombeirosbrasil.org.br">contato@institutobombeirosbrasil.org.br</a></p>
            <p>Atendimento em dias úteis</p>
          </div>
        </div>
        <div class="footer-bottom">© ${new Date().getFullYear()} Instituto Bombeiros Brasil. Todos os direitos reservados.</div>
      </div>
    </footer>
  `;
}

renderHeader();
renderFooter();
