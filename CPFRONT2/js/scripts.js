let btnCriar = document.querySelector("#btnCriar");

btnCriar.addEventListener("click", function (event) {
    event.preventDefault();
    
    let formaCard = document.querySelector("#frmCard");

    let div = document.createElement("div");
    let url = document.createElement("img");
    let titulo = document.createElement("h2");
    let descricao = document.createElement("p");

    url.src = formaCard.urlName.value;
    titulo.textContent = formaCard.tituloName.value;
    descricao.textContent = formaCard.descName.value;

    div.appendChild(url);
    div.appendChild(titulo);
    div.appendChild(descricao);

    let Cards = document.querySelector("#cards").querySelector("#card");
    Cards.appendChild(div);

})