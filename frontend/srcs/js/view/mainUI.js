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
export class Sidebar extends HTMLElement
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
                <a href="/platform" class="nav_logo">
                    <i class="bx bxs-tennis-ball nav_logo-icon"></i>
                </a>
                <div class="nav_list">
                    <a href="/platform" class="nav_link active">
                        <i class="bx bx-grid-alt nav_icon"></i>
                    </a>
                    <a href="/game" class="nav_link">
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
export class Game extends HTMLElement
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
                    height: 600px;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                }
                .game-mode-section
                {
                    .game-mode-title
                    {
                        color: #fff;
                        padding: 10px 15px;
                    }
                    .components
                    {
                        // border: 1px solid rgba(255, 255, 255, 0.25);
                        border-radius: 18px;
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        height: 90%;
                        justify-content: space-around;
                        gap: 2rem;
                    }
                    height: 230px;
                    width: 90%;
                }
            </style>

            <div class="game-section"></div>
			<div class="game-mode-section">
				<div class="game-mode-title">Game Mode</div>
				<game-mode src="mode1.jpg"></game-mode>
				<game-mode src="mode2.jpg"></game-mode>
				<game-mode src="mode3.jpg"></game-mode>
			</div>
        `;
    }
}

// skipcq: JS-D1001
export class MainUI extends HTMLElement
{
    constructor() { super('foo'); }
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
        
        this.appendChild(left);
        this.appendChild(middle);
        this.appendChild(right);
    }
}
