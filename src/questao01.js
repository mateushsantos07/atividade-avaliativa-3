import leia from 'readline-sync'

var valorproduto = leia.questionInt("DIGITE O VALOR DO PRODUTO DESEJADO: \n")

if (valorproduto < 20) {
    var valordesconto = valorproduto * 0.45;
} else {
    var valordesconto = valorproduto * 0.30;
}

var valorfinal = valorproduto - valordesconto

console.log("O VALOR DA COMPRA FOI DE R$: " + valorfinal);
