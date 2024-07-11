// import { stylesheet } from "./theme/homeTh.js";

export default class Home extends HTMLElement
{
  constructor()
  {
    super(...arguments);
  }
    
  connectedCallback()
  {
    this.setAttribute("id", "home-view");
    this.innerHTML += `
      <nav class="d-flex navbar justify-content-between">
          <a class="navbar-brand" href="/">Pong.me</a>
          <a class="home-buttons navbar-btn login-btn" href="/login">
              Login
          </a>
      </nav>
      <main class="home">
          <h1>Discover, Play & Challenge Your Friends</h1>
          <p>
              Pong.me support realtime game, chat, group chat channel,
              ranking system and tournament.
          </p>
          <a class="home-buttons navbar-btn discover-btn" href="/platform">
              Discover Now
          </a>
      </main>
    `;
    this.anchors();
  }
  anchors()
  {
    const mainContainer  = document.getElementById("container");
    const links = this.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        window.router.redirecto(href, mainContainer);
      });
    });
  }
}
customElements.define("home-view", Home);