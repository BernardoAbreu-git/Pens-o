const prompt = require("prompt-sync")();

let roomsAvaible = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let N = parseInt(prompt('Quantas pessoas precisam de quartos? '));
let data = [];

for ( i = 0; i < N; i++){
    console.log(`---Aluguel #${i+1}---`);

    let name = prompt('Qual o nome do cliente? ');
    let email = prompt('Qual seu email? ');
    console.log(roomsAvaible);
    let room = parseInt(prompt('Qual destes quartos o cliente deseja? '));
    if (room > 10 ){
        console.log(`O quarto ${room} não existe.`);
    }
    else if(room < 1){
        console.log(`O quarto ${room} não existe.`);
    }
    else {
        roomsAvaible.splice(room,1);
        console.log(`Quarto número ${room} selecionado.`);
    }

    data.push([room, name, email]);
}
console.log('---Quartos Ocupados---')
for (let i = 0; i < data.length; i++) {
    console.log(data[i].join(':\t'));
}

