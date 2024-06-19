import leia from 'readline-sync'

console.log("NOTAS DE 0 A 10\n")
var nota1 = leia.questionInt("DIGITE SUA PRIMEIRA NOTA: \n")
var qv1 = leia.questionInt("QUAL ERA O PESO DA NOTA? \n")

var nota2 = leia.questionInt("DIGITE O VALOR DA SEGUNDA NOTA: \n")
var qv2 = leia.questionInt("QUAL ERA O PESO DA NOTA? \n")

var nota3 = leia.questionInt("DIGITE O VALOR DA TERCEIRA NOTA: \n")
var qv3 = leia.questionInt("QUAL ERA O PESO DA NOTA? \n")

var mediaponderada = (nota1 * qv1) + (nota2 * qv2) + (nota3 * qv3);
var mediaponderada2 = mediaponderada / (qv1 + qv2 + qv3);

console.log("SUA MEDIA PONDERADA É DE:" + mediaponderada2);