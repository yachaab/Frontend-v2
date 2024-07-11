import { routes as customElem } from "./routes.js";

export const router = {

	goto: (path, container, addToHistory = true) =>
	{
		if ( addToHistory )
			history.pushState({ path }, null, path);
		// container.innerHTML = "";
		console.log("container: ", container.firstChild);
		// if ( typeof(container.children[1]) !== "undefined" );
		// 	container.remove(container.children[1]);
		container.appendChild( customElem( path ) );
		window.scrollTo(0, 0);
	},

	redirecto: async (path, container) =>
	{
		const userIsLogged = await auth.isAuth();
		if (userIsLogged)
		{
			if (path === "/login" || path === "/")
				router.goto("/platform", container);
			else
				router.goto(path, container);
		}
		else
		{
			if (  path === "/login", path === "/platform" )
				router.goto("/login", container);
			else
				router.goto("/", container);
		}
	}
}
