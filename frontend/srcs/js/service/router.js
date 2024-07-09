import { routes as customElem } from "./routes.js";

export const router = {

	goto: (path, containerId, addToHistory = true) =>
	{
		const container = document.getElementById(containerId);

		if ( addToHistory )
			history.pushState({ path }, null, path);

		container.innerHTML = "";

		container.appendChild( customElem(path) );

		window.scrollTo(0, 0);
	},

	redirecto: async path =>
	{
		// skipcq: JS-0125
		const userIsLogged = await auth.isAuth();
		if (userIsLogged)
		{
			if (path === "/login" || path === "/")
				router.goto("/platform", "root");
			else
				router.goto(path, "root");
		}
		else
			router.goto("/", "root");
	}
}
