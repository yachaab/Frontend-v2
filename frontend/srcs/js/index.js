import { auth } from "./auth/Authentication.js";
import { router } from "./service/router.js";

window.router = router;
window.auth = auth;

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("popstate", (e) => {
        router.redirecto( e.state.path, "root", false);
    });

    router.redirecto(location.pathname, "root");
});