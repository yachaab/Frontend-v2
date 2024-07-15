// skipcq: JS-D1001
export class Home extends HTMLElement
{
  constructor() { super('foo'); }
  // skipcq: JS-D1001
  connectedCallback()
  {
    this.setAttribute("id", "home-view");
    this.setAttribute("hidden", '');
    this.innerHTML += `
      <nav export class="d-flex navbar justify-content-between">
          <a export class="navbar-brand" href="/">Pong.me</a>
          <a export class="home-buttons navbar-btn login-btn" href="/login">
              Login
          </a>
      </nav>
      <main export class="home">
          <h1>Discover, Play & Challenge Your Friends</h1>
          <p>
              Pong.me support realtime game, chat, group chat channel,
              ranking system and tournament.
          </p>
          <a export class="home-buttons navbar-btn discover-btn" href="/platform">
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
            <nav export class="nav">
                <a href="/" export class="nav_logo">
                    <i export class="bx bx-grid-alt nav_icon"></i>
                </a>
                <div export class="nav_list">
                    <a href="/paltform" export class="nav_link">
                        <i export class="bx bxs-invader nav_icon"></i>
                    </a>
                    <a href="/setting" export class="nav_link">
                        <i export class="bx bxs-cog nav_icon"></i>
                    </a>
                    <a href="/" export class="nav_link">
                        <i export class="bx bx-log-out nav_icon"></i>
                    </a>
                </div>
				<a href="/profile" export class="nav_link">
					<i export class="bx bx-user nav_icon"></i>
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
            <div export class="game-section"></div>
			<div export class="game-mode-section">
				<div export class="game-mode-title">Game Mode</div>
                <div export class="game-mode-component">
                    <game-mode src="js/view/src/img/1.jpg" title="Friend"></game-mode>
                    <game-mode src="js/view/src/img/2.jpg" title="Bot"></game-mode>
                    <game-mode src="js/view/src/img/3.jpg" title="Solominti"></game-mode>
                </div>
			</div>
        `;
    }
}
// Game Mode component
export class GameMode extends HTMLElement
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
            <div export class="game-mode-float">${titleAtt}</div>
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
export class Profile extends HTMLElement
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
export class Platform extends HTMLElement
{
    constructor()
    {
        super('foo');
    }
    // 
    connectedCallback()
    {
        this.setAttribute('id', 'platform-view');
        this.setAttribute('hidden', '');
        this.innerHTML += `
        <style>
            :host
            {
                width: 100%;
                height: 100%;
                display: inline-block;
            }
            .container
            {
                display: flex !important;
                flex-direction: row;
                justify-content: space-around;
                gap: 150px;
                width: 80%;
                height: 40%;
            }
            .pong, .xo
            {
                display: flex;
                justify-content: end;
                align-items: center;
                position: relative;

            }
            .pong img, .xo img
            {
                border-radius: 12px;
                max-width: 100%;
                max-height: 100%;
                min-width: 500px;
            }

            .buttons-container
            {
                width: 100%;
                position: absolute;
                bottom: 24px;
                left: 0;
                display: flex;
                justify-content: space-around;
            }

            .button 
            {
                font-size: 14px;
                font-weight: 400;
                text-transform: uppercase;
                letter-spacing: 1px;
                border: none;
                cursor: pointer;
                display: inline-block;
                padding: 8px 12.5px;
                border-radius: 8px;
                background-color: var(--dark-teal);
                color: var(--light-olive);
                box-shadow: 0 0 0 3px #2f2e41, 0 6px 0 #2f2e41;
                transition: all 0.1s ease, background 0.3s ease;
            }
            .local
            {
                background: var(--coral) !important;
            }
            .local-xo
            {
                background: var(--light-olive) !important;
                color: var(--coral);
            }
            .button:hover,
            .button:focus
            {
                background: #df6108;
            }

            .button:active
            {
                box-shadow: 0 0 0 3px #2f2e41, 0 4px 0 #2f2e41;
                transform: translateY(2px);
            }
            .rank
            {
                margin-top: 80px;
                width: 100%;
                height: 55%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .rank-title
            {
                padding: 10px 0;
                width: 100%;
                text-align: center;
                color: var(--dark-purple);
            }
            .avatar {
                width: 120px;
                height: 120px;
                border-radius: 12px;
            }
            .avatar img{
                width: 100%;
                height: 100%;
                border-radius: 12px;
            }
            
            .name {
                width: 100%;
                text-align: center;
                color: var(--light-olive);
                font-size: 12px;
                padding: 10px 0;
            
            }
            .points {
                margin-top: 5px;
                color: var(--dark-purple);
                width: 100%;
                height: 20%;
                text-align: center;
                font-size: 10px;
            }
            .rank-card
            {
                margin-top: 20px;
                min-width: 180px;
                max-width: 180px;
                border-radius: 12px;
                background-color: var(--teal);
                height: 50%;
                padding: 15px 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                max-height: 100%;
            }
            @keyframes sliding
            {
                from{ transform: translateX(80%); }
                to{ transform: translateX(-100%); }
            }
            .slide
            {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 2.5rem;

                white-space: no-wrap;  
                animation: 8s sliding infinite linear;
            }
        </style>
        <div class="container">
            <div export class="pong">
                <img src="js/view/src/img/pong.gif">
                <div class="buttons-container">
                    <button class="button multi">Multiplayer</button>
                    <button class="button local">Local</button>
                </div>
            </div>
            <div export class="xo">
                <img src="js/view/src/img/xo-teal.gif">
                 <div class="buttons-container">
                    <button class="button multi">Multiplayer</button>
                    <button class="button local-xo">Local</button>
                </div>
            </div>
        </div>
        <div class="rank">
            <div class="rank-title">Players Rank</div>
            <div class="slide">
                <div class="rank-card">
                    <div class="avatar">
                        <!-- <img src="" alt="avatar"> -->
                        <img src="https://avatar.iran.liara.run/public" />
                    </div>
                    <div class="name">YACHAAB</div>
                    <div class="points">199pts</div>
                </div>
                <div class="rank-card">
                    <div class="avatar">
                        <!-- <img src="" alt="avatar"> -->
                        <img src="https://avatar.iran.liara.run/public" />
                    </div>
                    <div class="name">YACHAAB</div>
                    <div class="points">199pts</div>
                </div>

                <div class="rank-card">
                    <div class="avatar">
                        <!-- <img src="" alt="avatar"> -->
                        <img src="https://avatar.iran.liara.run/public" />
                    </div>
                    <div class="name">YACHAAB</div>
                    <div class="points">199pts</div>
                </div>

                <div class="rank-card">
                    <div class="avatar">
                        <!-- <img src="" alt="avatar"> -->
                        <img src="https://avatar.iran.liara.run/public" />
                    </div>
                    <div class="name">YACHAAB</div>
                    <div class="points">199pts</div>
                </div>


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
