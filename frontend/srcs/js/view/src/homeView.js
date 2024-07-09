// import { stylesheet } from "../theme/homeTheme.js";

export default class Home extends HTMLElement {
  constructor()
  {
    super();
    // const style = document.createElement("style");
    const template = document.getElementById("home-view");
    const templateContent = template.content.cloneNode(true);
    // style.textContent = stylesheet;
    // this.appendChild(style);
    this.appendChild(templateContent);
  }
  
  connectedCallback()
  {
    // const links = this.querySelectorAll("a");
    // links.forEach((link) => {
    //   link.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     const href = e.target.getAttribute("href");
    //     router.goto( href, "root" );
    //   });
    // });
  }
}
customElements.define("home-view", Home);
