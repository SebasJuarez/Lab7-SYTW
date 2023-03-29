class bDisplay extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        const shadowDOM = this.attachShadow({ mode: "open" });
        const link = document.createElement("link");
        shadowDOM.appendChild(link);
        const card = document.createElement("div");
        const style = document.createElement("style");
        style.appendChild(document.createTextNode(".book-card2:hover{box-shadow: 7px 7px 20px red;}"));
        style.appendChild(document.createTextNode(".book-card:hover{box-shadow: 3px 3px 10px white;}"));
        shadowDOM.appendChild(style);
        if(this.getAttribute("type")==2){
            card.setAttribute("class","book-card2");
            card.style="width: 50%;height: 50%;margin-bottom: 30px;";
        }else{
            card.setAttribute("class","book-card");
            card.style="width: 100%;height: 100%;margin-bottom: 30px;";
        }
        shadowDOM.appendChild(card);

        const image = document.createElement("img");
        image.setAttribute("src",this.getAttribute("src"));
        image.setAttribute("class","book-card-image");
        image.style="width: 100%;height: 90%;";
        card.appendChild(image);

        const title = document.createElement("p");
        title.innerText="Titulo: "+this.getAttribute("title");
        title.setAttribute("class","book-card-title");
        title.style="font-size: small;color:white;padding-left: 5px;";
        card.appendChild(title);

        const author = document.createElement("p");
        author.innerText="Autor: "+this.getAttribute("author");
        author.setAttribute("class","book-card-author");
        author.style="font-size: small;color:white;padding-left: 5px;";
        card.appendChild(author);
    }

}
customElements.define("my-display", bDisplay);