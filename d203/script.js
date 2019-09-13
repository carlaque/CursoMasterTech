// let filmes = [
//     {titulo:"Senhor dos Aneis", classificacao: "12"},
//     {titulo:"Toy Story", classificacao: "0"},
//     {titulo:"Star Wars", classificacao: "12"},
//     {titulo:"Millenium", classificacao: "18"},
//     {titulo:"Kung Fu Panda", classificacao: "0"},
//     {titulo:"Carol", classificacao: "16"},
//     {titulo:"Esposa de Mentirinha", classificacao: "12"},
//     {titulo:"As caçafantasmas", classificacao: "12"}
// ];

// let idade = Number(prompt('Digite sua idade'));

// console.log('Os filmes que lhe sao permitidos');
// for(let i  in filmes){
//     if(idade >= filmes[i ].classificacao){
//         console.log(filmes[i])
//     }
// }


// EXERCICIO CONSTRUIR UMA ESCADA DE 5 DEGRAUS COM #
let txt = '';
// for(let i = 0; i < 5; i++ ){
//     txt += '#';
//     console.log(txt);
// }

let material = prompt('Digite o material da escada que deseja fazer');
let degraus = Number(prompt('Digite a quantidade de degraus que essa escada deve possuir'));

for(let i= 0; i < degraus; i++){
    txt+= material;
    console.log(txt);
}


const aleatorio = (max, min) => {
    return Math.floor(Math.random()*(max - min + 1) + min);
};