export const router = {

	goto: (path, addToHistory = true) =>
	{
		// put toggling logic here
		if ( path === "/platform" )
		{
			window.component.left.removeAttribute('hidden');
			window.component.right.removeAttribute('hidden');
			window.component.game.removeAttribute('hidden');
			window.component.middle.removeAttribute('hidden');
		}


		if ( addToHistory )
			history.pushState({ path }, null, location.origin + path);
		window.scrollTo(0, 0);
	},

	redirecto: async (path) =>
	{
		const userIsLogged = await window.auth.isAuth();
		if (userIsLogged)
		{
			if (path === "/login" || path === "/")
				router.goto("/platform");
			else
				router.goto(path);
		}
		else
		{
			if (  path === "/login" || path === "/platform" )
				router.goto("/login");
			else
				router.goto("/");
		}
	}
}
