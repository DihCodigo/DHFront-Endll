let usuario1 = {
    nome: "Marcos",
    idade: 25,
    endereco: {
        rua: "Rua Lugar de um Lugar",
        bairro: "Centro",
        CEP: "12729987"
    },
    eProfessor: true
}
let usuario2 = {
    nome: "Rogerio",
    idade: 25,
    endereco: {
        rua: "Rua Lugar de um Lugar",
        bairro: "Centro",
        CEP: "12729987"
    },
    eProfessor: true
}
let usuario3 = {
    nome: "Silvia",
    idade: 25,
    endereco: {
        rua: "Rua Lugar de um Lugar",
        bairro: "Centro",
        CEP: "12729987"
    },
    eProfessor: true
}

let usuarios = [];
usuarios.push(usuario1);
usuarios.push(usuario2);
usuarios.push(usuario3);

//console.log(usuarios);

for (let prop in usuario2){
    //console.log(prop);
    //console.log(usuario2[prop]);
    //console.log(usuario2.endereco[prop]);
}

for (let i = 0; i < usuarios.length; i++) {
    //console.log(usuarios[i]);
}

for (let usuario of usuarios) {
    //console.log(usuario);
}

usuarios.forEach