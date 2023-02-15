let addEscolha = parseInt(prompt("1 - Papel / 2 - Pedra / 3 - Tesoura"));

function gerarAleatorio(min, max) {
    let possibilidades = max - min;
    let numeroSortido = parseInt(Math.random() * possibilidades);
    alert(numeroSortido);

    if(addEscolha === 1) {
        if (numeroSortido === 2) {
            alert("Voce escolheu papel e ganhou da pedra");
        }else if (numeroSortido === 3){
            alert("Voce escolheu papel e perdeu para tesoura");
        }else if(numeroSortido === 1) {
            alert("Voce escolheu papel e empatou com papel");
        }
    }else if(addEscolha === 2) {
        if (numeroSortido === 3) {
            alert("Voce escolheu pedra e ganhou da tesoura");
        }else if (numeroSortido === 1){
            alert("Voce escolheu pedra e perdeu para papel");
        }else if(numeroSortido === 2) {
            alert("Voce escolheu pedra e empatou com pedra");
        }
    }else if (addEscolha === 3) {
        if (numeroSortido === 1) {
            alert("Voce escolheu tesoura e ganhou da papel");
        }else if (numeroSortido === 2){
            alert("Voce escolheu tesoura e perdeu para pedra");
        }else if (numeroSortido === 3) {
            alert("Voce escolheu tesoura e empatou com tesoura");
        }
    }
}

gerarAleatorio(1, 3);
