import leia from 'readline-sync'

var vl1 = leia.questionInt("DIGITE O VALOR DO PRIMEIRO LADO DO TRIANGULO: \n")
var vl2 = leia.questionInt("DIGITE O VALOR DO SEGUNDO LADO DO TRIANGULO: \n")
var vl3 = leia.questionInt("DIGITE O VALOR DO TERCEIRO LADO DO TRIANGULO: \n")

if(vl1 < (vl2 + vl3)){
    console.log("VALOR INVALIDO")
} else if (vl2 < (vl1 + vl3)){
    console.log("VALOR INVALIDO")
}else if (vl3 < (vl1 + vl2)){
    console.log("VALOR INVALIDO")
}else if (vl1 === vl2 === vl3){
    console.log("TRIANGULO EQUILATERO")
}else if (vl1 === vl2 || vl1 === vl3 || vl2 === vl1 || vl3 === vl1 || vl3 === vl2){
    console.log("TRIANGULO ISOCELES")
}else if (vl1 != vl2 != vl3 ){
    console.log("TRIANGULO ESCALENO")
}