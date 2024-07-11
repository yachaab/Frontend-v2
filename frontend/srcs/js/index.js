import { auth } from "./auth/Authentication.js";
import { router } from "./service/router.js";
import MainUI from "./view/mainUI.js";
import Home from "./view/homeView.js";

window.router = router;
window.auth = auth;

document.addEventListener("DOMContentLoaded", () =>
{
    customElements.define("main-ui", MainUI);

    const mainui = document.getElementById("main-ui");
    const container = mainui.querySelector(`#container`);

    window.addEventListener("popstate", (e) => {
        router.redirecto( e.state.path, "container");
    });
    
    router.redirecto(location.pathname, container);
});