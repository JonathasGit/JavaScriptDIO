
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
var validar;
if (idade >=18){
    validar = true
} else{
    validar = false
}
return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));






/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}*/

alert(soma(5,10));
//alert(setReplace("Vai Japão","Japão","Brasil")); Troca o nome vai japao por vai brasil 



