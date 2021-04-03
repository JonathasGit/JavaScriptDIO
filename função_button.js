function clicou123(){ // Quando clicar no botão, vai usar essa função com o alerta ai em baixo. 
    document.getElementById("Final"); // Coloca um texto html 
    //console.log(document.getElementById("agradecimento"));
//alert("Obrigado por Clicar, Aguarde enquanto o sistema carrega.");
 }

function redirecionar(){
    //window.open("https://www.google.com.br"); redirecionar 
    window.location.href = "https://www.google.com.br";
}





// Mesma variavel para linha 23 do HTML, mousemove. 
function trocar(elemento){ // Quando passar o mouse, troca o texto. 
      elemento.innerHTML = "Teste 2, coloquei o elemento, InnerHTML. Quando passar o mouse";
    // Passando o elemento, como ele mesmo. 
    //document.getElementById("mousemove").innerHTML = "Verificar se trocou o texto";
    //alert("Trocou o texto ????????");

}

function  voltar(elemento){
    elemento.innerHTML = "Teste 2, coloquei o elemento. Elemento fixo "; 
   //document.getElementById("mousemove").innerHTML = "agora deu certo Cara";

}

function load(){
    alert("Página carregada"); // QUando a página carregar, o body vai mostrar essa mensagem. 

}



//Função Change 

function funcaoChange(elemento){
    
    console.log(elemento)
}