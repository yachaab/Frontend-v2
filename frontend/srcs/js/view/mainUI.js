// Home View
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
// Sidebar View
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
                <a href="/platform" export class="nav_logo">
                    <i export class="bx bx-grid-alt nav_icon"></i>
                </a>
                <div export class="nav_list">
                    <a href="/game" export class="nav_link">
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
                const href = e.currentTarget.getAttribute("href");
                console.log("That fyp")
                    // if ( href === "/" )
                    // {
                    //     // TODO: handle the logout logic
                    //     Auth.logout();
                    //     global.router.goto(href);
                        
                    // }
                    window.router.goto(href);
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
                ::backdrop
                {
                    background-color: var(--light-olive);
                }
                .game-section
                {
                    width: 95%;
                    height: 100%;
                    margin-bottom: 30px;
                    border: 1px solid var(--teal);
                    position: relative;
                }
                .fscreen-btn
                {
                    position: absolute;
                    top:  15px;
                    right:  15px;
                    background: rgba(0,0,0,0.05);
                    border:  0;
                    width:  40px;
                    height:  40px;
                    border-radius: 50%;
                    box-sizing: border-box;
                    transition:  transform .3s;
                    cursor:  pointer;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .fscreen-btn:hover {
                    transform: scale(1.125);
                }
                .fscreen-btn svg:nth-child(2) { 
                    display: none;
                }
                [fullscreen] .fscreen-btn svg:nth-child(1) {
                    display: none;
                }
                [fullscreen] .fscreen-btn svg:nth-child(2) {
                    display: inline-block;
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
            <div class="game-section">
                <button class="fscreen-btn">
                    <svg viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 
                        7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                    <svg viewBox="0 0 24 24">
                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 
                        11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                    </svg>
                </button>
			</div>
        `;
        if ( document.fullscreenEnabled )
        {
            const button = this.querySelector("button");
            button.addEventListener("click", toggleFscreen);
            // document.addEventListener( "keydown", keyPress );
        }
        function toggleFscreen()
        {
            console.log("clicked: ", document.body.getAttribute("fullscreen"));
            if (document.body.getAttribute("fullscreen") === null) {
                // document.body.requestFullscreen();
                document.body.setAttribute("fullscreen","");
                window.component.left.setAttribute('hidden', '');
			    window.component.right.setAttribute('hidden', '');
            } else {
                // document.exitFullscreen();
                document.body.removeAttribute("fullscreen");
                window.component.left.removeAttribute('hidden');
			    window.component.right.removeAttribute('hidden');
            }
        }
    }
}
// User Profile View
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
      this.root.innerHTML = `
        <style>
            :host {
                width: 100%;
                height: 100%;
            }
            .first {
                margin: 0 auto;
                border: solid 1px rgb(100 100 100 / .5)!important;
                border-radius: 18px;
                width: 90%;
                height: 30%;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                padding: 20px;
                background-color: var(--teal);
            }
            .common {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: end;
                font-size: 10px;
                padding-bottom: 40px;
            }
            .win {
                flex-grow: 2;
                flex-basis: 2%}
            .user {
                flex: 4;
                flex-basis: 8%}
            .avatar {
                width: 100%;
                text-align: center;
            }
            div img {
                width: 150px;
                height: 150px;
                border: solid 2px rgb(200 200 200 / .75)!important;
                border-radius: 50%;
                background: rgb(100 100 100 / .75);
                object-fit: cover;
            }
            .info {
                width: 100%;
                padding-top: 20px;
                text-align: center;
                color: red;
            }
            .info:last-child {
                color: rgb(200 200 200 / .75);
                font-size: 8px;
            }
            .loss {
                flex-grow: 2;
                flex-basis: 2%;
            }
        </style>
        <div class="first">
            <div class="win common">wins: 10 pts</div>
            <div class="user common">
                <div class="avatar">
                    <img src="" alt="" />
                </div>
                <div class="fullname info">fullname</div>
                <div class="username info">@username</div>
            </div>
            <div class="loss common">loss: 0 pts</div>
		</div>
      `;
      
      const win = this.root.querySelector(".win");
      win.textContent = `Win Count: ${window.auth.wins}`;
  
      const loss = this.root.querySelector(".loss");
      loss.textContent = `Loss Count: ${window.auth.wins}`;
  
      const avatar = this.root.querySelector(".avatar img");
      avatar.src = window.auth.avatar;
  
      const fullname = this.root.querySelector(".fullname");
      fullname.textContent = `${window.auth.fullname}`;
  
      const username = this.root.querySelector(".username");
      username.textContent = `@${window.auth.user}`;
    }
}
// Platform View
export class Platform extends HTMLElement
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
            }
            .container
            {
                width: 100%;
                height: 35%;
                display: flex;
                flex-direction: row;
                // justify-content: center;
            }
            .wrapper
            {
                margin: 0 auto;
                display: flex;
                gap: 150px;
                width: 80%;
                height: 100%;
            }
            .pong, .xo
            {
                width: 100%;
                position: relative;
            }
            .xo
            {
                justify-content: start !important;
            }
            .pong img, .xo img
            {
                border-radius: 12px;
                width: 100%;
                height: 100%;
            }
            .btn-wrapper
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
                font-size: 80%;
                font-weight: 300;
                text-transform: uppercase;
                letter-spacing: 1px;
                border: none;
                cursor: pointer;
                display: inline-block;
                padding: 2.5% 6%;
                border-radius: 8px;
                background-color: var(--dark-teal);
                color: var(--light-olive);
                box-shadow: 0 0 0 3px #2f2e41, 0 6px 0 #2f2e41;
                transition: all 0.1s ease, background 0.3s ease;
                font-family: "Press Start 2P", sans-serif !important;
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

            // .button:active
            // {
            //     box-shadow: 0 0 0 3px #2f2e41, 0 4px 0 #2f2e41;
            //     transform: translateY(2px);
            // }
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
            .rank:hover .slide
            {
                animation-play-state: paused;
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
                animation: 10s sliding infinite linear;
            }
        </style>
        <div class="container">
            <div class="wrapper">
                <div class="pong">
                    <img src="js/view/src/img/pong.gif">
                    <div class="btn-wrapper">
                        <button class="button multi">Multiplayer</button>
                        <button class="button local">Local</button>
                    </div>
                </div>
                <div class="xo">
                    <img src="js/view/src/img/xo-teal.gif">
                    <div class="btn-wrapper">
                        <button class="button multi">Multiplayer</button>
                        <button class="button local-xo">Local</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="rank">
            <div class="rank-title">Players Rank</div>
            <div class="slide">
                <div class="rank-card">
                    <div class="avatar">
                        <!-- <img src="https://avatar.iran.liara.run/public" alt="avatar"> -->
                    </div>
                    <div class="name">YACHAAB</div>
                    <div class="points">199pts</div>
                </div>
            </div>
        </div>
        `;
    }
}
// Main UI View
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
