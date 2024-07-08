import { routes as customElem } from "./routes.js";

export const router = {

	goto: function ( path, containerId, addToHistory = true )
	{
		const container = document.getElementById(containerId);
		
		if ( addToHistory )
			history.pushState({ path }, null, path);

		container.innerHTML = "";

		container.appendChild( customElem(path) );

		scrollX = 0;
		scrollY = 0;
	},

	redirecto: async function (path)
	{
		const userIsLogged = await auth.isAuth();

		if (userIsLogged)
		{
			if (path == "/login" || path == "/")
				this.goto("/platform", "root");
			else
				this.goto(path, "root");
		}
		else
			this.goto("/", "root");
	}
}
