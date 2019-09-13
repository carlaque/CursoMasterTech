let usuario = 'carla';
let senha = 'tralala';

let logado = 0;

let saldo = 1000;

do {
    let usuarioInserido = prompt("Digite seu Nome de usuario");
    let senhaInserido = prompt("Digite sua Senha");
    if (usuarioInserido == usuario && senhaInserido == senha) {
        alert('Logado com sucesso');
        let saque = Number(prompt('Digite o quanto voce gostaria de sacar:'));
        if (saque <= saldo) {
            saldo = saldo - saque;
            alert('Saque de ' + saque + ' reais concluido com sucesso');
            alert('Saldo atual eh: ' + saldo);
        } else {
            alert('Nao é possivel executar este saque, pois o valor ultrapassa o seu saldo atual');
        }

        logado = 233;
    } else if (usuarioInserido != usuario) {
        alert('Nome de usuario errado. Tente Novamente');
    } else {
        alert('Senha errada. Tente Novamente');
    }
    logado++;
} while (logado < 3);

if (logado == 3) {
    alert('voce atingiu o limite de tentativas');
}

