import { auth } from "./auth/Authentication.js";
import { router } from "./service/router.js";
import { MainUI, Sidebar, Game, GameMode, Platform, Profile} from "./view/mainUI.js";

window.router = router;
window.auth = auth;
window.component = {};

document.addEventListener("DOMContentLoaded", () =>
{
    customElements.define("main-ui", MainUI);
    customElements.define("sidebar-view", Sidebar);
    customElements.define("game-view", Game);
    customElements.define("game-mode", GameMode);
    customElements.define("platform-view", Platform);
    customElements.define("profile-mode", Profile);

    window.component = {
        left: document.getElementById("left-view"),
        middle: document.getElementById("middle-view"),
        right: document.getElementById("right-view"),
        game: document.getElementById("game-view"),
        profile: document.getElementById("profile-view"),
        platform: document.getElementById("platform-view"),
        // home: document.getElementById("home-view"),
        // chat: document.getElementById("chat-view"),
        // sidebar: document.getElementById("sidebar-view"),
        // setting: document.getElementById("setting-view")
    }

    // window.addEventListener("popstate", (e) => {
    //     router.redirecto( e.state.path);
    // });
    
    router.goto(location.pathname);
});



// if ( path === "/platform" )
//     {
//         window.component.left.removeAttribute('hidden');
//         window.component.right.removeAttribute('hidden');
//         window.component.game.removeAttribute('hidden');
//         window.component.middle.removeAttribute('hidden');
//     }
//     else
//     {
//         window.component.left.setAttribute('hidden', '');
//         window.component.right.setAttribute('hidden', '');
//         window.component.game.setAttribute('hidden', '');
//         window.component.middle.setAttribute('hidden', '');
//     }
    // if ( path === "/profile" )
    // {
    //     window.component.profile.removeAttribute('hidden');
    // }