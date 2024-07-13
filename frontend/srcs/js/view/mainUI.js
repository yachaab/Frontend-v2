// skipcq: JS-D1001
class Home extends HTMLElement
{
  constructor() { super('foo'); }
  // skipcq: JS-D1001
  connectedCallback()
  {
    this.setAttribute("id", "home-view");
    this.setAttribute("hidden", '');
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
    // this.anchors();
  }
  // skipcq: JS-D1001
//   anchors()
//   {
//     const mainContainer  = document.getElementById("container");
//     const links = this.querySelectorAll("a");
//     links.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const href = e.target.getAttribute("href");
//         window.router.redirecto(href, mainContainer);
//       });
//     });
//   }
}

// skipcq: JS-D1001
class Sidebar extends HTMLElement
{
    constructor()
    {
        super('foo');
    }
    // skipcq: JS-0057
    connectedCallback()
    {
        this.setAttribute("id", "sidebar-view");

        this.innerHTML +=
        `
            <nav class="nav">
                <a href="/" class="nav_logo">
                    <i class="bx bx-grid-alt nav_icon"></i>
                </a>
                <div class="nav_list">
                    <a href="/paltform" class="nav_link">
                        <i class="bx bxs-invader nav_icon"></i>
                    </a>
                    <a href="/setting" class="nav_link">
                        <i class="bx bxs-cog nav_icon"></i>
                    </a>
                    <a href="/" class="nav_link">
                        <i class="bx bx-log-out nav_icon"></i>
                    </a>
                </div>
				<a href="/profile" class="nav_link">
					<i class="bx bx-user nav_icon"></i>
				</a>
			</nav>
        `;
        this.doSomeThing();
    }
    // skipcq: JS-0105
    doSomeThing()
    {
        const arr = this.querySelectorAll("a");
        arr.forEach(elem => {
            // skipcq: JS-0002
            elem.addEventListener("click", (e) => {
                e.preventDefault();
                // const href = e.currentTarget.getAttribute("href");
                    // if ( href === "/" )
                    // {
                    //     // TODO: handle the logout logic
                    //     Auth.logout();
                    //     global.router.navigateTo(href, "root");
                        
                    // }
                    // global.router.navigateTo(href, "middle");
            });
        });
    }
}
// Game View
class Game extends HTMLElement
{
    constructor() { super('foo'); }
    // connectedCallback
    connectedCallback()
    {
        this.setAttribute("id", "game-view");
        this.setAttribute("hidden", "");
        this.innerHTML += `
            <style>
                .game-section
                {
                    width: 95%;
                    height: 800px;
                    border: 1px solid rgba(255, 255, 255, 0.10);
                }
                .game-mode-section
                {
                    .game-mode-title
                    {
                        color: #fff;
                        padding: 10px 0;
                    }
                    .game-mode-component
                    {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                    }
                    height: 230px;
                    width: 90%;
                    align-items: center;
                }
            </style>
            <div class="game-section"></div>
			<div class="game-mode-section">
				<div class="game-mode-title">Game Mode</div>
                <div class="game-mode-component">
                    <game-mode src="js/view/src/img/1.jpg" title="Friend"></game-mode>
                    <game-mode src="js/view/src/img/2.jpg" title="Bot"></game-mode>
                    <game-mode src="js/view/src/img/3.jpg" title="Solominti"></game-mode>
                </div>
			</div>
        `;
    }
}


// Game Mode component
class GameMode extends HTMLElement
{
    constructor()
    {
        super('foo');
        this.root = this.attachShadow({mode:"open"})
    }
    // connected call back
    connectedCallback()
    {
        this.setAttribute("id", "game-mode");
        const srcAtt = this.getAttribute("src");
        const titleAtt = this.getAttribute("title");
        this.root.innerHTML += `
            <style>
                :host
                {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                }
                img
                {
                    width: 150px;
                    height: 150px;
                    border-radius: 12px;
                    cursor: pointer;
                }
                img:hover 
                {
                    -webkit-filter: blur(1.5px);
                }
                .game-mode-float
                {
                    display: flex;
                    width: 150px;
                    height: 150px;
                    position: absolute;
                    border-radius: 12px;
                    justify-content: center;
                    align-items: center;
                    z-index: -1;
                    pointer-events: none;
                }
            </style>
            <div class="game-mode-float">${titleAtt}</div>
            <img src="${srcAtt}">
        `;

        const img = this.root.querySelector("img");
        const title = this.root.querySelector(".game-mode-float");
        img.addEventListener("mouseenter", () =>
        {
            title.style.zIndex = '99';
        });
        img.addEventListener("mouseleave", () =>
        {
            title.style.zIndex = '-1';
        });
    }
}

// User Profile
class Profile extends HTMLElement
{
    constructor()
    {
      super('foo');
      this.root = this.attachShadow({mode:"open"})
    }
    // connected call back
    connectedCallback()
    {
      this.setAttribute("id", "profile-view");
      this.setAttribute("hidden", "");
      
    //   const win = this.querySelector(".win");
    //   win.textContent = `Win Count: ${window.auth.wins}`;
  
    //   const loss = this.querySelector(".loss");
    //   loss.textContent = `Loss Count: ${window.auth.wins}`;
  
    //   const avatar = this.querySelector(".avatar img");
    //   avatar.src = window.auth.avatar;
  
    //   const fullname = this.querySelector(".fullname");
    //   fullname.textContent = `${window.auth.fullname}`;
  
    //   const username = this.querySelector(".username");
    //   username.textContent = `@${window.auth.user}`;
    }
}
// Platform
class Platform extends HTMLElement
{
    constructor()
    {
        super('foo');
        this.root = this.attachShadow({mode:"open"});
    }
    // 
    connectedCallback()
    {
        this.setAttribute('id', 'platform-view');
        this.setAttribute('hidden', '');
        this.root.innerHTML += `
        <style>
            :host
            {
                width: 100%;
                height: 100%;
                display: inline-block;
            }
            .container
            {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                gap: 150px;
                width: 100%;
                height: 40%;
            }
            .pong
            {
                display: flex;
                justify-content: end;
                align-items: center;
                flex-grow: 1;
                position: relative;

            }
            .xo
            {
                display: flex;
                justify-content: start;
                align-items: center;
                flex-grow: 1;
            }
            .pong::before
            {
                content: "";
                position: absolute;
                width: 350px;
                height: 350px;
                background: red;
            }
            img
            {
                border-radius: 12px;
                max-width: 400px;
                max-height: 400px;
            }
        </style>
        <div class="container">
            <div class="pong">
                <img src="js/view/src/img/pong.gif">
            </div>
            <div class="xo">
                <img src="js/view/src/img/xo.gif">
            </div>
        </div>
        `;
    }
}
// skipcq: JS-D1001
export class MainUI extends HTMLElement
{
    constructor()
    {
        super('foo');
        customElements.define("sidebar-view", Sidebar);
        customElements.define("game-view", Game);
        customElements.define("game-mode", GameMode);
        customElements.define("platform-view", Platform);
        customElements.define("profile-mode", Profile);
    }
    // skipcq: JS-D1001
    connectedCallback()
    {
        // const home      = document.createElement("home-view");
        const left      = document.createElement("div");
        const right     = document.createElement("div");
        const middle    = document.createElement("div");
        const chat      = document.createElement("chat-view");
        const game      = document.createElement("game-view");
        const sidebar   = document.createElement("sidebar-view");
        const profile   = document.createElement("profile-view");
        const setting   = document.createElement("setting-view");
        const platform   = document.createElement("platform-view");

        this.setAttribute("id", "main-ui");
        left.setAttribute("id", "left-view");
        left.setAttribute("hidden", '');
        right.setAttribute("id", "right-view");
        right.setAttribute("hidden", '');
        middle.setAttribute("id", "middle-view");
        middle.setAttribute("hidden", '');

        right.appendChild(chat);
        left.appendChild(sidebar);

        middle.appendChild(game);
        middle.appendChild(profile);
        middle.appendChild(setting);
        middle.appendChild(platform);
        
        this.appendChild(left);
        this.appendChild(middle);
        this.appendChild(right);
    }
}
