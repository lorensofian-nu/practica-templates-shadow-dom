class UserCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        const style = document.createElement("style")
        style.append(
            "p{background-color:yellow}"
        )
        this.shadowRoot.appendChild(style);
        const texto = document.createElement("p");
        texto.textContent="hola crack";
        this.shadowRoot.appendChild(texto);
    
    }
}
customElements.define("user-card",UserCard)
