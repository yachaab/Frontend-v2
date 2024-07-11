class MainUI extends HTMLElement
{
    constructor()
    {
        super(...arguments);
        // this.attachShadow({mode: "open"});
    }

    connectedCallback()
    {
        this.setAttribute("id", "main-ui");
        
        const div = document.createElement("div");
        div.setAttribute("id", "container");
        this.appendChild(div);
    }
}
export default MainUI;