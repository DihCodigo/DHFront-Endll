//  body onload="gerando(0, 3)"
function gerando(min, max) {
    let possibilidades = max - min;
    let num1 = Math.random() * possibilidades;
    alert(num1);

    if(form1.jogadas.value == 1) {
        if (num1 > 2) {
            alert("Voce escolheu papel e ganhou da pedra");
        }else if (num1 > 1){
            alert("Voce escolheu papel e perdeu para tesoura");
        }else {
            alert("Voce escolheu papel e empatou com papel");
        }
    }else if(form1.jogadas.value == 2) {
        if (num1 > 2) {
            alert("Voce escolheu pedra e ganhou da tesoura");
        }else if (num1 > 1){
            alert("Voce escolheu pedra e perdeu para papel");
        }else {
            alert("Voce escolheu pedra e empatou com pedra");
        }
    }else if (form1.jogadas.value == 3) {
        if (num1 > 2) {
            alert("Voce escolheu tesoura e ganhou da papel");
        }else if (num1 > 1){
            alert("Voce escolheu tesoura e perdeu para pedra");
        }else {
            alert("Voce escolheu tesoura e empatou com tesoura");
        }
    }
}
