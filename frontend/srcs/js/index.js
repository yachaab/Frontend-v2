import { auth } from "./auth/Authentication.js";
import { router } from "./service/router.js";
import { MainUI, Sidebar, Game } from "./view/mainUI.js";

window.router = router;
window.auth = auth;
window.component = {};

document.addEventListener("DOMContentLoaded", () =>
{
    customElements.define("main-ui", MainUI);
    customElements.define("sidebar-view", Sidebar);
    customElements.define("game-view", Game);

    window.component = {
        left: document.getElementById("left-view"),
        middle: document.getElementById("middle-view"),
        right: document.getElementById("right-view"),
        game: document.getElementById("game-view"),
        // home: document.getElementById("home-view"),
        // chat: document.getElementById("chat-view"),
        // sidebar: document.getElementById("sidebar-view"),
        // profile: document.getElementById("profile-view"),
        // setting: document.getElementById("setting-view")
    }

    // window.addEventListener("popstate", (e) => {
    //     router.redirecto( e.state.path);
    // });
    
    router.goto(location.pathname);
});