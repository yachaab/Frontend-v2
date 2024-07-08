export const routes = (path) => {
    switch( path )
    {
        case "/":
        case "/login":
        case "/platform":
        case "/profile":
        case "/setting":
        case "/game":
            const page = path.substring(1);
            if (!page.length) page = "home";
            return ( document.createElement(`${page}-page`) );
        default:
            const container = document.createElement("div");
            container.textContent = "404 Not Found";
            return container;
    }
};